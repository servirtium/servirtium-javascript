const { Servirtium } = require('../dist')
const Console = require("console");

const run = async() => {
  try {
    let myArgs = process.argv.slice(2);

    let servirtium

    let realUrl = myArgs[1]
    let realDomainAndPort = myArgs[1].replace("https://", "")
        .replace("http://", "")

    console.log("realUrl=" + realUrl);
    console.log("realDomainAndPort=" + realDomainAndPort);

    switch (myArgs[0]) {

      case 'record':
        servirtium = new Servirtium(realUrl)
        servirtium.setPrettyPrint()
        servirtium.setTestName("todobackend_test_suite")
        servirtium.setCallerRequestHeaderReplacements({
          "http://localhost:61417": realUrl,
          "localhost:61417": realDomainAndPort
        })
        servirtium.setCallerResponseHeaderReplacements({
          [realUrl]: "http://localhost:61417",
          [realDomainAndPort]: "localhost:61417"
        })
        servirtium.setCallerResponseBodyReplacement({
          [realUrl]: "http://localhost:61417",
          [realDomainAndPort]: "localhost:61417",
          "https": "http",
        })
        servirtium.setRecordResponseHeadersRemoval(["via", "server"])
        servirtium.setRecordRequestHeaderReplacements({"user-agent: .*": "user-agent: Chrome under Selenium control"})
        // Can't do date masking as the TODO test suite changes behavior if you do.
        //servirtium.setRecordResponseHeaderReplacements({"date: .*": "date: Wed, 1 Jan 2020 01:23:45 GMT"})
        await servirtium.startRecord()
        process.on('SIGTERM', async (code) => {
          await servirtium.writeRecord()
          await servirtium.endRecord()
        })
        break;
      case 'playback':
        servirtium = new Servirtium(realUrl)
        servirtium.setTestName("todobackend_test_suite")
        servirtium.setCallerRequestHeaderReplacements({
          "http://localhost:61417": realUrl,
          "localhost:61417": realDomainAndPort
        })
        servirtium.setCallerResponseHeaderReplacements({
          [realUrl]: "http://localhost:61417",
          [realDomainAndPort]: "localhost:61417"
        })
        servirtium.setCallerResponseBodyReplacement({
          [realUrl]: "http://localhost:61417",
          [realDomainAndPort]: "localhost:61417",
          "https": "http",
        })

        await servirtium.startPlayback()
        process.on('SIGTERM', async (code) => {
          await servirtium.endPlayback()
        })
        break;
      default:
        console.log('Oops, should have been record or playback')
    }
  } catch (err) {
    console.error(err)
  }
}

run()
