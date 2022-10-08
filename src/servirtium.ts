import express from 'express'
import path from 'path'
import fs from 'fs'
import http from 'http'
import ejs from 'ejs'
import {createProxyMiddleware, Options} from 'http-proxy-middleware'
import cors from 'cors'

export type RegexReplacement = {[regex: string]: string}

export interface IServirtium {
  startPlayback(callback?: (...args: any[]) => void)
  endPlayback(callback?: (err?: Error) => void)
  setTestName(testName: string)
  startRecord(callback?: (err?: Error) => void)
  endRecord(callback?: (err?: Error) => void)
  writeRecord()
  setCallerRequestHeadersRemoval(headers: string[])
  setCallerRequestHeaderReplacements(values: RegexReplacement)
  setCallerRequestBodyReplacement(values: RegexReplacement)
  setRecordRequestHeadersRemoval(headers: string[])
  setRecordRequestHeaderReplacements(values: RegexReplacement)
  setRecordRequestBodyReplacement(values: RegexReplacement)
  setCallerResponseReplacement(headers: string[])
  setCallerResponseHeaderReplacements(values: RegexReplacement)
  setCallerResponseBodyReplacement(values: RegexReplacement)
  setRecordResponseHeadersRemoval(headers: string[])
  setRecordResponseHeaderReplacements(values: RegexReplacement)
  setRecordResponseBodyReplacement(values: RegexReplacement)
  checkMarkdownIsDifferentToPreviousRecording(): Promise<boolean>
}

export class Servirtium {
  private apiUrl: string
  private serverPlayback: http.Server
  private serverRecord: http.Server
  private testName: string
  private interactionSequence: number
  private recordRequestPath: string
  private recordRequestMethod: string
  private recordRequestHeaders: http.OutgoingHttpHeaders
  private recordRequestBody: string
  private recordResponseHeaders: http.IncomingHttpHeaders
  private recordResponseContentType: string
  private recordResponseBody: string
  private recordResponseStatus: number
  private recordContent: string
  // caller request
  private callerRequestHeadersRemoval: string[]
  private callerRequestHeaderReplacements: RegexReplacement
  private callerRequestBodyReplacement: RegexReplacement

  // record request
  private recordRequestHeadersRemoval: string[]
  private recordRequestHeaderReplacements: RegexReplacement
  private recordRequestBodyReplacement: RegexReplacement

  // caller response
  private callerResponseHeadersRemoval: string[]
  private callerResponseHeaderReplacements: RegexReplacement
  private callerResponseBodyReplacement: RegexReplacement

  // record response
  private recordResponseHeadersRemoval: string[]
  private recordResponseHeaderReplacements: RegexReplacement
  private recordResponseBodyReplacement: RegexReplacement

  constructor(apiUrl?: string) {
    this.apiUrl = apiUrl
    this.callerRequestHeadersRemoval = []
    this.callerRequestHeaderReplacements = {}
    this.callerRequestBodyReplacement = {}

    this.recordRequestHeadersRemoval = []
    this.recordRequestHeaderReplacements = {}
    this.recordRequestBodyReplacement = {}

    this.callerResponseHeadersRemoval = []
    this.callerResponseHeaderReplacements = {}
    this.callerResponseBodyReplacement = {}

    this.recordResponseHeadersRemoval = []
    this.recordResponseHeaderReplacements = {}
    this.recordResponseBodyReplacement = {}

    this.interactionSequence = 0
    this.recordContent = ''
  }


  // Methods for caller request replacement
  public setCallerRequestHeadersRemoval = (headers: string[]) => {
    this.callerRequestHeadersRemoval = headers
  }

  public setCallerRequestHeaderReplacements = (values: RegexReplacement) => {
    this.callerRequestHeaderReplacements = values
  }

  public setCallerRequestBodyReplacement = (values: RegexReplacement) => {
    this.callerRequestBodyReplacement = values
  }

  // Methods for record request replacement
  public setRecordRequestHeadersRemoval = (headers: string[]) => {
    this.recordRequestHeadersRemoval = headers
  }

  public setRecordRequestHeaderReplacements = (values: RegexReplacement) => {
    this.recordRequestHeaderReplacements = values
  }

  public setRecordRequestBodyReplacement = (values: RegexReplacement) => {
    this.recordRequestBodyReplacement = values
  }

  // Methods for caller response replacement
  public setCallerResponseReplacement = (headers: string[]) => {
    this.callerResponseHeadersRemoval = headers
  }

  public setCallerResponseHeaderReplacements = (values: RegexReplacement) => {
    this.callerResponseHeaderReplacements = values
  }

  public setCallerResponseBodyReplacement = (values: RegexReplacement) => {
    this.callerResponseBodyReplacement = values
  }

  // Methods for record response replacement
  public setRecordResponseHeadersRemoval = (headers: string[]) => {
    this.recordResponseHeadersRemoval = headers
  }

  public setRecordResponseHeaderReplacements = (values: RegexReplacement) => {
    this.recordResponseHeaderReplacements = values
  }

  public setRecordResponseBodyReplacement = (values: RegexReplacement) => {
    this.recordResponseBodyReplacement = values
  }

  public setTestName = (testName: string) => {
    this.testName = testName
    this.interactionSequence = 0
    this.recordContent = ''
  }

  public startPlayback = (callback?: (...args: any[]) => void, port: number = 61417) => {
    const app = express()
    app.use(cors())
    app.use(this._playbackHandler)
    this.serverPlayback = app.listen(port, callback)
    console.log("Servirtium playback starting on port " + port)
  }

  public endPlayback = (callback?: (err?: Error) => void) => {
    this.serverPlayback.close(callback)
  }

  private _replaceContent = (content: string, regexReplacement: RegexReplacement): string => {
    let finalContent = content
    Object.keys(regexReplacement).forEach(item => {
      const regex = new RegExp(item, "g")
      finalContent = finalContent.replace(regex, regexReplacement[item])
    })
    return finalContent
  }

  private _onProxyReq = async (proxyReq: http.ClientRequest, request: express.Request, response: express.Response) => {
    // Mutate caller request headers
    this.callerRequestHeadersRemoval?.forEach((item) => {
      proxyReq.removeHeader(item)
    })
    const headers = proxyReq.getHeaders()
    Object.keys(this.callerRequestHeaderReplacements).forEach((regexString) => {
      const regex = new RegExp(regexString, "g")
      Object.keys(headers).forEach(headerKey => {
        const line = `${headerKey}: ${headers[headerKey]}`
        const line2 = line.replace(regex, this.callerRequestHeaderReplacements[regexString])
        if (line != line2) {
          proxyReq.setHeader(headerKey, line2.split(": ")[1])
        }
      })
    })

    // Mutate record request headers
    let callerRequestHeaders = proxyReq.getHeaders()
    this.recordRequestHeadersRemoval?.forEach(item => {
      delete callerRequestHeaders[item]
    })
    Object.keys(this.recordRequestHeaderReplacements).forEach((regexString) => {
      const regex = new RegExp(regexString, "g")
      Object.keys(callerRequestHeaders).forEach(headerKey => {
        const line = `${headerKey}: ${callerRequestHeaders[headerKey]}`
        const line2 = line.replace(regex, this.recordRequestHeaderReplacements[regexString])
        if (line != line2) {
          callerRequestHeaders[headerKey] = line2.split(": ")[1]
        }
      })
    })
    // Assign record data
    this.recordRequestPath = proxyReq.path
    this.recordRequestMethod = proxyReq.method
    this.recordRequestHeaders = callerRequestHeaders

    if (request.body) {
      const callerBody = this._replaceContent(request.body, this.callerRequestBodyReplacement)
      // Assign record body
      const recordBody = this._replaceContent(callerBody, this.recordRequestBodyReplacement)
      this.recordRequestBody = recordBody
      // Forward request
      proxyReq.write(callerBody)
    }
  }

  private _onProxyRes = async (proxyRes: http.IncomingMessage, request: express.Request, response: express.Response) => {
    // mutate real response for record
    this.recordResponseHeadersRemoval.forEach((item) => {
      delete proxyRes.headers[item]
    })
    Object.keys(this.recordResponseHeaderReplacements).forEach((regexString) => {
      const regex = new RegExp(regexString, "g")
      Object.keys(proxyRes.headers).forEach(headerKey => {
        const line = headerKey + ": " + proxyRes.headers[headerKey]
        const line2 = line.replace(regex, this.recordResponseHeaderReplacements[regexString])
        if (line != line2) {
          proxyRes.headers[headerKey] = line2.split(": ")[1]
        }
      })
    })
    this.recordResponseHeaders = proxyRes.headers
    this.recordResponseStatus = proxyRes.statusCode
    this.recordResponseContentType = proxyRes?.headers?.['content-type']

    let body = []
    proxyRes.on('data', (chunk) => {
      body.push(chunk);
    })
    proxyRes.on('end', async () => {
      let content = Buffer.concat(body).toString()
      const finalContent = this._replaceContent(content, this.recordResponseBodyReplacement)
      this.recordResponseBody = finalContent
      await this._generateTemplate()
      response.status(proxyRes.statusCode)
      // Mutate response for caller
      this.callerResponseHeadersRemoval.forEach((item) => {
        delete proxyRes.headers[item]
      })
      Object.keys(this.callerResponseHeaderReplacements).forEach((regexString) => {
        const regex = new RegExp(regexString, "g")
        Object.keys(proxyRes.headers).forEach(headerKey => {
          const line = headerKey + ": " + proxyRes.headers[headerKey]
          const line2 = line.replace(regex, this.callerResponseHeaderReplacements[regexString])
          if (line != line2) {
            proxyRes.headers[headerKey] = line2.split(": ")[1]
          }
        })
      })
      const callerResponseBody = this._replaceContent(finalContent, this.callerResponseBodyReplacement)
      const callerResponseBodyBuff = Buffer.from(callerResponseBody)
      response.end(callerResponseBodyBuff)
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
    app.use(cors())
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
      selfHandleResponse : true,
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
      requestPath: this.recordRequestPath,
      requestMethod: this.recordRequestMethod,
      responseStatus: this.recordResponseStatus,
      responseContentType: this.recordResponseContentType,
      requestHeaders: this.recordRequestHeaders,
      requestBody: this.recordRequestBody,
      responseHeaders: this.recordResponseHeaders,
      responseBody: this.recordResponseBody
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

  private _getPlaybackResponse = (interaction: string): { body: string, headers: http.IncomingHttpHeaders, statusCode: number } => {

    let sections = interaction.split("\n### ")
    let headers;
    let responseBody;
    let statusCode: number;

    sections.forEach(section => {
      if (section.startsWith("Response headers recorded for playback")) {
        headers = this._parseHeaders(section.split("```")[1])
      }
      if (section.startsWith("Response body recorded for playback")) {
        statusCode = +section.split("(")[1].split(": ")[0]
        let body = section.split("```")[1];
        responseBody = body.substring(1).trim()
      }
    })
    return { body: responseBody, headers, statusCode }
  }

  private _playbackHandler = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    try {
      const fileDir = path.resolve(process.cwd(), 'mocks', `${this.testName}.md`)
      const content = await fs.readFileSync(fileDir, { encoding: 'utf8' })
      const interaction = this._getInteraction(content, this.interactionSequence)
      const { body, headers, statusCode } = this._getPlaybackResponse(interaction)

      // Mutate response for caller
      this.callerResponseHeadersRemoval.forEach((item) => {
        delete headers[item]
      })
      Object.keys(this.callerResponseHeaderReplacements).forEach((regexString) => {
        const regex = new RegExp(regexString, "g")
        Object.keys(headers).forEach(headerKey => {
          const line = headerKey + ": " + headers[headerKey]
          const line2 = line.replace(regex, this.callerResponseHeaderReplacements[regexString])
          if (line != line2) {
            headers[headerKey] = line2.split(": ")[1]
          }

          const headerValues = (headers[headerKey] as string).replace(regex, this.callerResponseHeaderReplacements[regexString])
          headers[headerKey] = headerValues
        })
      })
      const callerResponseBody = this._replaceContent(body, this.callerResponseBodyReplacement)
      const callerResponseBodyBuff = Buffer.from(callerResponseBody)

      res.writeHead(statusCode)
      res.end(callerResponseBodyBuff)
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
      const newContent = this._replaceContent(this.recordContent, this.recordResponseBodyReplacement)
      return newContent === markdownContent
    } catch(err) {
      return true
    }
  }
}

export default Servirtium
