import express from 'express'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
import http from 'http'
import ejs from 'ejs'
import { createProxyMiddleware, Options } from 'http-proxy-middleware'

export type RegexReplacement = {[regex: string]: string}

export interface IServirtium {
  startPlayback(callback?: (...args: any[]) => void)
  endPlayback(callback?: (err?: Error) => void)
  setTestName(testName: string)
  startRecord(callback?: (err?: Error) => void)
  endRecord(callback?: (err?: Error) => void)
  writeRecord()
  addCallerRequestHeadersRemoval(headers: string[])
  addCallerRequestHeadersReplacement(headers: http.OutgoingHttpHeaders)
  addCallerRecordHeadersRemoval(headers: string[])
  addCallerRecordHeadersReplacement(headers: http.OutgoingHttpHeaders)

  deleteResponseHeaders(headers: string[])
  replaceResponseHeaders(headers: http.IncomingHttpHeaders)
  replaceContentByRegex(values: RegexReplacement)
  checkMarkdownIsDifferentToPreviousRecording(): Promise<boolean>
}

export class Servirtium {
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
  // caller request
  private callerRequestHeadersRemoval: string[]
  private callerRequestHeadersReplacement: http.OutgoingHttpHeaders
  private callerRequestBodyReplacement: RegexReplacement

  // record request
  private recordRequestHeadersRemoval: string[]
  private recordRequestHeadersReplacement: http.OutgoingHttpHeaders
  private recordRequestBodyReplacement: RegexReplacement

  // caller response
  private callerResponseHeadersRemoval: string[]
  private callerResponseHeadersReplacement: http.IncomingHttpHeaders
  private callerResponseBodyReplacement: {[regex: string]: string}

  // record response
  private recordResponseHeadersRemoval: string[]
  private recordResponseHeadersReplacement: http.IncomingHttpHeaders
  private recordResponseBodyReplacement: {[regex: string]: string}

  constructor(apiUrl?: string) {
    this.apiUrl = apiUrl
    this.callerRequestHeadersRemoval = []
    this.recordResponseHeadersRemoval = []
    this.callerRequestHeadersReplacement = {}
    this.recordResponseHeadersReplacement = {}
    this.interactionSequence = 0
    this.recordContent = ''
  }


  // Methods for caller request replacement
  public addCallerRequestHeadersRemoval = (headers: string[]) => {
    this.callerRequestHeadersRemoval = headers
  }

  public addCallerRequestHeadersReplacement = (headers: http.OutgoingHttpHeaders) => {
    this.callerRequestHeadersReplacement = headers
  }

  public addCallerRequestBodyReplacement = (values: RegexReplacement) => {
    this.callerRequestBodyReplacement = values
  }

  // Methods for record request replacement
  public addRecordRequestHeadersRemoval = (headers: string[]) => {
    this.recordRequestHeadersRemoval = headers
  }

  public addRecordRequestHeadersReplacement = (headers: http.OutgoingHttpHeaders) => {
    this.recordRequestHeadersReplacement = headers
  }

  public addRecordRequestBodyReplacement = (values: RegexReplacement) => {
    this.recordRequestBodyReplacement = values
  }

  // Methods for caller response replacement
  public addCallerResponseReplacement = (headers: string[]) => {
    this.callerResponseHeadersRemoval = headers
  }

  public addCallerResponseHeadersReplacement = (headers: http.IncomingHttpHeaders) => {
    this.callerResponseHeadersReplacement = headers
  }

  public addCallerResponseBodyReplacement = (values: RegexReplacement) => {
    this.callerResponseBodyReplacement = values
  }

  // Methods for record response replacement
  public addRecordResponseReplacement = (headers: string[]) => {
    this.recordResponseHeadersRemoval = headers
  }

  public addRecordResponseHeadersReplacement = (headers: http.IncomingHttpHeaders) => {
    this.recordResponseHeadersReplacement = headers
  }

  public addRecordResponseBodyReplacement = (values: RegexReplacement) => {
    this.recordResponseBodyReplacement = values
  }

  public setTestName = (testName: string) => {
    this.testName = testName
    this.interactionSequence = 0
    this.recordContent = ''
  }

  public startPlayback = (callback?: (...args: any[]) => void, port: number = 61417) => {
    const app = express()
    app.use(cors({ origin: true }))
    app.use(this._playbackHandler)
    this.serverPlayback = app.listen(port, callback)
    console.log("Servirtium playback starting on port " + port)
  }

  public endPlayback = (callback?: (err?: Error) => void) => {
    this.serverPlayback.close(callback)
  }

  private _replaceContent = (content: string): string => {
    let finalContent = content
    if (this.recordResponseBodyReplacement) {
      Object.keys(this.recordResponseBodyReplacement).forEach(item => {
        const regex = new RegExp(item)
        finalContent = finalContent.replace(regex, this.recordResponseBodyReplacement[item])
      })
    }
    return finalContent
  }

  private _onProxyReq = async (proxyReq: http.ClientRequest, request: express.Request, response: express.Response) => {
    this.callerRequestHeadersRemoval?.forEach((item) => {
      proxyReq.removeHeader(item)
    })
    Object.keys(this.callerRequestHeadersReplacement).forEach((item) => {
      proxyReq.setHeader(item, this.callerRequestHeadersReplacement[item])
    })
    this.requestPath = proxyReq.path
    this.requestHeaders = proxyReq.getHeaders()
    this.requestMethod = proxyReq.method
    if (request.body) {
      this.requestBody = request.body
      proxyReq.write(request.body)
    }
  }

  private _onProxyRes = async (proxyRes: http.IncomingMessage, request: express.Request, response: express.Response) => {
    this.recordResponseHeadersRemoval.forEach((item) => {
      delete proxyRes.headers[item]
    })
    Object.keys(this.recordResponseHeadersReplacement).forEach((item) => {
      proxyRes.headers[item] = this.recordResponseHeadersReplacement[item]
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

  private _onError =(err: Error, req: express.Request, res: express.Response) => {
    res.writeHead(500, {
      'Content-Type': 'text/plain',
    });
    res.end('Something went wrong. And we are reporting a custom error message.');
  }

  public startRecord  = (callback?: (err?: Error) => void, port: number = 61417) => {
    const app = express()
    app.use(cors({ origin: true }))
    app.use((req, res, next) => {
      let body = []
      req.on('data', (chunk) => {
        body.push(chunk);
      })
      req.on('end', async () => {
        let content = Buffer.concat(body).toString()
        req.body = content
        next()
      })
    })
    const options = {
      target: this.apiUrl,
      changeOrigin: true,
      onProxyReq: this._onProxyReq,
      onProxyRes: this._onProxyRes,
      onError: this._onError,
    } as Options

    app.use('/', createProxyMiddleware(options))
    this.serverRecord = app.listen(port, callback)
    console.log("Servirtium recording starting on port " + port)
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

  private _getInteraction = (content: string, interactionSequence: number): string => {
    const interactions = ("\n" + content).split("\n## Interaction ")
    return interactions[interactionSequence + 1]
  }

  private _parseHeaders = (content: string): http.IncomingHttpHeaders => {
    if (content.includes("```")) {
      //console.log("headers>>>>" + content + "<<<<<<<")
    }
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

  private _getPlaybackResponse = (interaction: string): { body: string, headers: http.IncomingHttpHeaders } => {

    let sections = interaction.split("\n### ")
    let headers;
    let responseBody;

    sections.forEach(section => {
      if (section.startsWith("Response headers recorded for playback")) {
        headers = this._parseHeaders(section.split("```")[1])
      }
      if (section.startsWith("Response body recorded for playback")) {
        let body = section.split("```")[1];
        responseBody = body.substring(1)
        headers["content-length"] = responseBody.length
      }
    })
    return { body: responseBody, headers }
  }

  private _playbackHandler = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    try {
      const fileDir = path.resolve(process.cwd(), 'mocks', `${this.testName}.md`)
      const content = await fs.readFileSync(fileDir, { encoding: 'utf8' })
      const interaction = this._getInteraction(content, this.interactionSequence)
      const { body, headers } = this._getPlaybackResponse(interaction)
      Object.keys(headers)?.forEach((item: string) => {
        res.setHeader(item, headers[item])
      })
      res.writeHead(200)
      res.end(body)
    } catch (error) {
      res.writeHead(500)
      res.end('')
      console.log("Internal Server Error: " + error)
      console.trace(error);
    }
    this.interactionSequence += 1

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
