import Servirtium from "./servirtium"
import fs from 'fs'

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

  describe('deleteRequestHeaders',  () => {
    it('should set deleteRequestHeaders', async () => {
      await servirtium.deleteRequestHeaders(['mock'])
      expect(servirtium['requestHeadersDelete']).toEqual(['mock'])
    })
  })

  describe('deleteResponseHeaders',  () => {
    it('should set deleteResponseHeaders', async () => {
      await servirtium.deleteResponseHeaders(['mock'])
      expect(servirtium['responseHeadersDelete']).toEqual(['mock'])
    })
  })

  describe('replaceRequestHeaders',  () => {
    it('should set replaceRequestHeaders', async () => {
      await servirtium.replaceRequestHeaders({'set-cookie': '123'})
      expect(servirtium['requestHeadersReplace']).toEqual({'set-cookie': '123'})
    })
  })

  describe('replaceResponseHeaders',  () => {
    it('should set replaceResponseHeaders', async () => {
      await servirtium.replaceResponseHeaders({'set-cookie': ['123']})
      expect(servirtium['responseHeadersReplace']).toEqual({'set-cookie': ['123']})
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

  describe('replaceContentByRegex',  () => {
    it('should set replaceContentByRegex', async () => {
      servirtium.replaceContentByRegex({'123': '123'})
      expect(servirtium['regexToReplaceContent']).toEqual({'123': '123'})
    })
  })

  describe('_replaceContent', () => {
    it('should run correctly', () => {
      const content = 'password'
      servirtium.replaceContentByRegex({'password': 'MASKED'})
      const result = servirtium['_replaceContent'](content)
      expect(result).toEqual('MASKED')
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

  describe('_generateTemplate', () => {
    it('should run correctly', async (done) => {
      servirtium['recordContent'] = 'mock'
      servirtium['requestHeaders'] = {'set-cookie': ['123']}
      servirtium['responseHeaders'] = {'set-cookie': ['123']}
      await servirtium['_generateTemplate']()
      expect(servirtium['interactionSequence']).toEqual(1)
      expect(servirtium['recordContent']).toBeDefined()
      done()
    })

    it('should run correctly', async (done) => {
      servirtium['recordContent'] = 'mock'
      servirtium['requestHeaders'] = {'set-cookie': ['123']}
      servirtium['responseHeaders'] = {'set-cookie': ['123']}
      servirtium['interactionSequence'] = 1
      await servirtium['_generateTemplate']()
      expect(servirtium['interactionSequence']).toEqual(2)
      expect(servirtium['recordContent']).toBeDefined()
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
})
