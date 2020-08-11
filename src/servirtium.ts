import express from 'express'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
import http from 'http'
import ejs from 'ejs'
import { createProxyMiddleware, Options } from 'http-proxy-middleware'

export interface IServirtium {
  startPlayback(callback?: (...args: any[]) => void)
  endPlayback(callback?: (err?: Error) => void)
  setTestName(testName: string)
  startRecord(callback?: (err?: Error) => void)
  endRecord(callback?: (err?: Error) => void)
  writeRecord()
  deleteRequestHeaders(headers: string[])
  deleteResponseHeaders(headers: string[])
  replaceRequestHeaders(headers: http.OutgoingHttpHeaders)
  replaceResponseHeaders(headers: http.IncomingHttpHeaders)
  replaceContentByRegex(values: { [key: string]: string })
  checkMarkdownIsDifferentToPreviousRecording(): Promise<boolean>
}

class Servirtium {
  private apiUrl: string
  private serverPlayback: http.Server
  private serverRecord: http.Server
  private testName: string
  private interactionSequence: number
  private requestHeaders: http.OutgoingHttpHeaders
  private requestPath: string
  private requestMethod: string
  private requestBody: string
  private responseHeaders: http.IncomingHttpHeaders
  private responseContentType: string
  private responseBody: string
  private responseStatus: number
  private recordContent: string
  private requestHeadersDelete: string[]
  private responseHeadersDelete: string[]
  private requestHeadersReplace: http.OutgoingHttpHeaders
  private responseHeadersReplace: http.IncomingHttpHeaders
  private regexToReplaceContent: {[regex: string]: string}

  constructor(apiUrl?: string) {
    this.apiUrl = apiUrl
    this.requestHeadersDelete = []
    this.responseHeadersDelete = []
    this.requestHeadersReplace = {}
    this.responseHeadersReplace = {}
    this.interactionSequence = 0
    this.recordContent = ''
  }

  public setTestName = (testName: string) => {
    this.testName = testName
    this.interactionSequence = 0
    this.recordContent = ''
  }

  public startPlayback = (callback?: (...args: any[]) => void) => {
    const app = express()
    app.use(cors({ origin: true }))
    app.use(this._playbackHandler)
    this.serverPlayback = app.listen(61417, callback)
  }

  public deleteRequestHeaders = (headers: string[]) => {
    this.requestHeadersDelete = headers
  }

  public deleteResponseHeaders = (headers: string[]) => {
    this.responseHeadersDelete = headers
  }

  public replaceRequestHeaders = (headers: http.OutgoingHttpHeaders) => {
    this.requestHeadersReplace = headers
  }

  public replaceResponseHeaders = (headers: http.IncomingHttpHeaders) => {
    this.responseHeadersReplace = headers
  }

  public endPlayback = (callback?: (err?: Error) => void) => {
    this.serverPlayback.close(callback)
  }

  public replaceContentByRegex = (values: { [key: string]: string }) => {
    this.regexToReplaceContent = values
  }

  private _replaceContent = (content: string): string => {
    let finalContent = content
    if (this.regexToReplaceContent) {
      Object.keys(this.regexToReplaceContent).forEach(item => {
        const regex = new RegExp(item)
        finalContent = finalContent.replace(regex, this.regexToReplaceContent[item])
      })
    }
    return finalContent
  }

  private _onProxyReq = (proxyReq, request) => {
    this.requestHeadersDelete?.forEach((item) => {
      proxyReq.removeHeader(item)
    })
    Object.keys(this.requestHeadersReplace).forEach((item) => {
      proxyReq.setHeader(item, this.requestHeadersReplace[item])
    })
    this.requestPath = proxyReq.path
    this.requestHeaders = proxyReq.getHeaders()
    this.requestMethod = proxyReq.method
    this.requestBody = request.body
  }

  private _onProxyRes = async (proxyRes) => {
    this.responseHeadersDelete.forEach((item) => {
      delete proxyRes.headers[item]
    })
    Object.keys(this.responseHeadersReplace).forEach((item) => {
      proxyRes.headers[item] = this.responseHeadersReplace[item]
    })
    this.responseHeaders = proxyRes.headers
    this.responseStatus = proxyRes.statusCode
    this.responseContentType = proxyRes?.headers?.['content-type']
    let body = []
    proxyRes.on('data', (chunk) => {
      body.push(chunk);
    })
    proxyRes.on('end', async () => {
      let content = Buffer.concat(body).toString()
      const finalContent = this._replaceContent(content)
      this.responseBody = finalContent
      await this._generateTemplate()
    })
  }

  private _onError =( err, req, res) => {
    res.writeHead(500, {
      'Content-Type': 'text/plain',
    });
    res.end('Something went wrong. And we are reporting a custom error message.');
  }

  public startRecord  = (callback?: (err?: Error) => void) => {
    const app = express()
    app.use(cors({ origin: true }))
    const options = {
      target: this.apiUrl,
      changeOrigin: true,
      onProxyReq: this._onProxyReq,
      onProxyRes: this._onProxyRes,
      onError: this._onError,
    } as Options

    app.use('/', createProxyMiddleware(options))
    this.serverRecord = app.listen(61417, callback)
  }

  public endRecord = (callback?: (err?: Error) => void) => {
    this.serverRecord.close(callback)
  }

  public writeRecord = async () => {
    const destDir = path.resolve(process.cwd(), 'mocks')
    await fs.mkdirSync(destDir, { recursive: true })
    const fileDir = path.resolve(process.cwd(), 'mocks', `${this.testName}.md`)
    await fs.writeFileSync(fileDir, this.recordContent)
  }

  private _generateTemplate = async () => {
    const templatePath = path.resolve(__dirname, 'template.ejs')
    const ejsTemplate = await fs.readFileSync(templatePath, { encoding: 'utf8' })
    const template = ejs.compile(ejsTemplate, {
      escape: (markup) => {
        return markup
      }
    })
    const tmpl = template({
      interactionSequence: this.interactionSequence,
      requestPath: this.requestPath,
      requestMethod: this.requestMethod,
      responseStatus: this.responseStatus,
      responseContentType: this.responseContentType,
      requestHeaders: this.requestHeaders,
      requestBody: this.requestBody,
      responseHeaders: this.responseHeaders,
      responseBody: this.responseBody
    })
    if(this.interactionSequence === 0) {
      this.recordContent=`${tmpl}`
    } else {
      this.recordContent = `${this.recordContent}\n\n${tmpl}`
    }
    this.interactionSequence += 1
  }

  private _getScenario = (content: string, scenarioSequence: number): string => {
    const scenarios = content?.split("## Interaction")
    return scenarios[scenarioSequence + 1]
  }

  private _parseHeaders = (content: string): http.IncomingHttpHeaders => {
    let headers = {}
    const headersContents = content.split('\n')
    headersContents?.forEach((item: string) => {
      const keysAndValues = item?.split(': ')
      const KEY_INDEX = 0
      const VALUE_INDEX = 1
      const isValidHeaders = keysAndValues?.[KEY_INDEX] !== ''
      if (isValidHeaders) {
        headers[keysAndValues?.[KEY_INDEX]] = keysAndValues?.[VALUE_INDEX]
      }
    })
    return headers
  }

  private _getPlaybackResponse = (content: string): { body: string, headers: http.IncomingHttpHeaders } => {
    const headerRegex = /`+\n+### Response headers recorded for playback:\n+`+/g
    const contentSplited = content?.split(headerRegex)
    const RESPONSE_INDEX = 1
    const bodyRegex = /`+\n+### Response body recorded for playback \([a-zA-Z0-9\s:/)]+\n+`+/g
    const responseSplited = contentSplited?.[RESPONSE_INDEX]?.split(bodyRegex)
    const unuseCharRegex = /(`+|\n+)/g
    const responseBody = responseSplited?.[1]?.replace(unuseCharRegex, '')
    const headers = this._parseHeaders(responseSplited?.[0])
    return { body: responseBody, headers }
  }

  private _playbackHandler = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    try {
      const fileDir = path.resolve(process.cwd(), 'mocks', `${this.testName}.md`)
      const content = await fs.readFileSync(fileDir, { encoding: 'utf8' })
      const scenario = this._getScenario(content, this.interactionSequence)
      const { body, headers } = this._getPlaybackResponse(scenario)
      Object.keys(headers)?.forEach((item: string) => {
        res.setHeader(item, headers[item])
      })
      this.interactionSequence += 1
      res.writeHead(200)
      res.end(body)
    } catch (error) {
      res.writeHead(500)
      res.end('Internal Server Error')
    }
  }

  public checkMarkdownIsDifferentToPreviousRecording = async (): Promise<boolean> => {
    try {
      const fileDir = path.resolve(process.cwd(), 'mocks', `${this.testName}.md`)
      const markdownContent = await fs.readFileSync(fileDir, { encoding: 'utf8' })
      const newContent = this._replaceContent(this.recordContent)
      return newContent === markdownContent
    } catch(err) {
      return true
    }
  }
}

export default Servirtium
