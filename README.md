# servirtium-javascript

A javascript implementation of Servirtium, a library that helps test interactions with Web APIs.

# How it works

Servirtium is a server that serves as a man-in-the-middle for HTTP conversations: in record mode, it processes incoming requests, forwards them to a 
destination API and also writes the response into a markdown file with a special format that is common across all the 
implementations of the library. Later, these markdown files are used to replay the previously-recorded interactions, allowing test automation 
to use those interactions without making real API calls which is far faster.

![](https://user-images.githubusercontent.com/82182/195794632-7aaa75f0-6c42-4761-9177-7c52ce6ea98f.png)

See also a minimal demo project/repo: https://github.com/servirtium/demo-javascript-climate-tck

# Prerequisites

You can install by

```
npm install @servirtium/recorder
```

# Usage

You can use one of these attribute on test function to start the Servirtium server and config it to serve request in records and playback mode

## For record mode test example:

```
describe('climateAPI record', () => {
  let climateApiClient: IClimateAPI
  let servirtium: IServirtium

  beforeAll((done) => {
    climateApiClient = new ClimateAPI('http://localhost:61417')
    servirtium = new Servirtium('http://climatedataapi.worldbank.org')
    servirtium.replaceRequestHeaders({ "user-agent": "Servirtium-Agent" })
    servirtium.replaceResponseHeaders({ "set-cookie": ["MASKED"], "date": "Sun, 09 Aug 2020 18:42:45 GMT", })
    servirtium.startRecord(() => {
      done()
    })
  })

  afterAll((done) => {
    servirtium.endRecord(() => {
      done()
    })
  })

  beforeEach((done) => {
    const testName = jasmine['currentTest'].description
    servirtium.setTestName(testName)
    done()
  })

  afterEach(async(done) => {
    await servirtium.writeRecord()
    done()
  })

  it('TestAverageRainfallForGreatBritainFrom1980to1999Exists', async () => {
    try {
      const output = '988.84549723310131333'
      const result = await climateApiClient.getAveAnnualRainfall(1980, 1999, 'gbr')
      expect(result).toEqual(output)
    } catch (error) {
      expect(error).toBeUndefined()
    }
  })
})
```

## For Playback mode test example:

```
describe('climateAPI playback', () => {
  let climateApiClient: IClimateAPI
  let servirtium: IServirtium
  beforeAll(() => {
    climateApiClient = new ClimateAPI('http://localhost:61417')
    servirtium = new Servirtium()
    servirtium.startPlayback()
  })

  afterAll((done) => {
    servirtium.endPlayback(() => {
      done()
    })
  })

  beforeEach(() => {
    const testName = jasmine['currentTest'].description
    servirtium.setTestName(testName)
  })

  it('TestAverageRainfallForGreatBritainFrom1980to1999Exists', async () => {
    try {
      const output = '988.84549723310131333'
      const result = await climateApiClient.getAveAnnualRainfall(1980, 1999, 'gbr')
      expect(result).toEqual(output)
    } catch (error) {
      expect(error).toBeUndefined()
    }
  })
})
```

## For direct mode test example:

```
describe('climateAPI direct', () => {
  let climateApiClient: IClimateAPI
  beforeAll(() => {
    climateApiClient = new ClimateAPI('http://climatedataapi.worldbank.org')
  })

  it('TestAverageRainfallForGreatBritainFrom1980to1999Exists', async () => {
    try {
      const output = '988.84549723310131333'
      const result = await climateApiClient.getAveAnnualRainfall(1980, 1999, 'gbr')
      expect(result).toEqual(output)
    } catch (error) {
      expect(error).toBeUndefined()
    }
  })
})
```

# Building/testing

```
npm test
```
