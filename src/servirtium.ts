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

  private _replaceContent = (content: string, regexReplacement: RegexReplacement): string => {
    let finalContent = content
    Object.keys(regexReplacement).forEach(item => {
      const regex = new RegExp(item)
      finalContent = finalContent.replace(regex, regexReplacement[item])
    })
    return finalContent
  }

  private _onProxyReq = async (proxyReq: http.ClientRequest, request: express.Request, response: express.Response) => {
    console.log({ headers: proxyReq.getHeaders() })
    // Mutate caller request headers
    this.callerRequestHeadersRemoval?.forEach((item) => {
      proxyReq.removeHeader(item)
      console.log('card 1 ====================')
      console.log({ item })
    })
    Object.keys(this.callerRequestHeadersReplacement).forEach((item) => {
      console.log('card 1 ====================')
      proxyReq.setHeader(item, this.callerRequestHeadersReplacement[item])
      console.log({ item })
    })

    // Mutate record request headers
    let callerRequestHeaders = proxyReq.getHeaders()
    console.log({ callerRequestHeaders })
    this.recordRequestHeadersRemoval?.forEach(item => {
      delete callerRequestHeaders[item]
    })
    Object.keys(this.recordRequestHeadersReplacement).forEach((item) => {
      callerRequestHeaders[item] = this.recordRequestHeadersReplacement[item]
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
    Object.keys(this.recordResponseHeadersReplacement).forEach((item) => {
      proxyRes.headers[item] = this.recordResponseHeadersReplacement[item]
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
      Object.keys(this.callerResponseHeadersReplacement).forEach((item) => {
        proxyRes.headers[item] = this.callerResponseHeadersReplacement[item]
      })
      let callerResponseBody = body.toString();
      callerResponseBody = this._replaceContent(callerResponseBody, this.recordResponseBodyReplacement)
      const callerResponseBodyBuff = Buffer.from(callerResponseBody)
      response.send(callerResponseBodyBuff)
      response.end()
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
      const newContent = this._replaceContent(this.recordContent, this.recordResponseBodyReplacement)
      return newContent === markdownContent
    } catch(err) {
      return true
    }
  }
}

export default Servirtium
