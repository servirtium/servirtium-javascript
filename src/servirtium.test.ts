import Servirtium from "./servirtium"

describe('default proxy middleware option values can be overriden by injecting them', () => {
  const servirtium = new Servirtium('http://does-not-matter:1111')
  let defaultOptions = servirtium["proxyMiddlewareOptions"]
  expect(defaultOptions).toMatchObject({selfHandleResponse: true, changeOrigin: true, target: 'http://does-not-matter:1111'})

  const servirtiumWithInjectedProxyMiddlewareOptions = new Servirtium('http://does-not-matter:1111', {selfHandleResponse: false, changeOrigin: false})
  let optionsWithInjectedValues = servirtiumWithInjectedProxyMiddlewareOptions["proxyMiddlewareOptions"]
  expect(optionsWithInjectedValues).toMatchObject({selfHandleResponse: false, changeOrigin: false, target: 'http://does-not-matter:1111'})
})


describe('Servirtium', () => {
  let servirtium: Servirtium
  beforeEach(() => {
    servirtium = new Servirtium('http://localhost:61417')
  })

  afterEach(async (done) => {
    if (!!servirtium['serverPlayback']) {
      await servirtium.endPlayback()
    }
    if (!!servirtium['serverRecord']) {
      await servirtium.endRecord()
    }
    done()
  })


  describe('setTestName', () => {
    it('should setTestName', () => {
      servirtium.setTestName('mockTestName')
      expect(servirtium['testName']).toEqual('mockTestName')
      expect(servirtium['interactionSequence']).toEqual(0)
      expect(servirtium['recordContent']).toEqual('')
    })
  })
  describe('startPlayback',  () => {
    it('should start and return serverPlayback', async () => {
      await servirtium.startPlayback()
      expect(servirtium['serverPlayback']).toEqual(expect.anything())
    })
  })

  describe('setCallerRequestHeadersRemoval',  () => {
    it('should set setCallerRequestHeadersRemoval', async () => {
      await servirtium.setCallerRequestHeadersRemoval(['mock'])
      expect(servirtium['callerRequestHeadersRemoval']).toEqual(['mock'])
    })
  })

  describe('endPlayback', () => {
    it('should end playback', async (done) => {
      await servirtium.startPlayback()
      const spy = jest.spyOn(servirtium['serverPlayback'], 'close')
      servirtium.endPlayback()
      expect(spy).toBeCalled()
      done()
    })
  })

  describe('startRecord', () => {
    it('should run correctly', async(done) => {
      await servirtium.startRecord()
      expect(servirtium['serverRecord']).toEqual(expect.anything())
      done()
    })
  })

  describe('endRecord', () => {
    it('should end playback', async (done) => {
      await servirtium.startRecord()
      const spy = jest.spyOn(servirtium['serverRecord'], 'close')
      servirtium.endRecord()
      expect(spy).toBeCalled()
      done()
    })
  })

  describe('_getInteraction', () => {
    it('should run correctly', () => {
      const mockContent = '## Interaction 123 \n## Interaction 234 '
      const result = servirtium['_getInteraction'](mockContent, 0)
      expect(result).toEqual('123 ')
    })
    it('should run correctly', () => {
      const mockContent = '## Interaction 123 \n## Interaction 234 '
      const result = servirtium['_getInteraction'](mockContent, 1)
      expect(result).toEqual('234 ')
    })
  })

  describe('_getPlaybackResponse', () => {
    it('should run correctly', () => {
      const mockContent = "```\n\n### Response headers recorded for playback:\n\n```"
      const result = servirtium['_getPlaybackResponse'](mockContent)
      expect(result).toEqual({body: undefined, headers: {}})
    })
  })

  describe('prettyPrint', () => {
    it('returns pretty xml', () => {
      const result = servirtium['_prettyPrint']("<this><blah></blah></this>")
      expect(result).toEqual("<this><blah></blah></this>")
    })
    it('returns pretty json', () => {
      const result = servirtium['_prettyPrint']('{"key": \n\n"value"}')
      expect(result).toEqual('{"key": \n\n"value"}')
    })
    it('cant pretty bad xml', () => {
      const result = servirtium['_prettyPrint']("<<<<this><blah></blah></this>")
      expect(result).toEqual("<<<<this><blah></blah></this>")
    })
    it('cant pretty bad json', () => {
      const result = servirtium['_prettyPrint']('{{{{"key": \n\n"value"}')
      expect(result).toEqual('{{{{"key": \n\n"value"}')
    })
  })
})
