const { Servirtium } = require('../dist')

const run = async() => {
  try {
    let myArgs = process.argv.slice(2);

    let servirtium

    switch (myArgs[0]) {
      case 'record':
        servirtium = new Servirtium('https://todo-backend-sinatra.herokuapp.com')
        servirtium.setTestName("todobackend_test_suite")
        servirtium.setCallerRequestHeaderReplacements({
          "http://localhost:61417": "https://todo-backend-sinatra.herokuapp.com",
          "localhost:61417": "todo-backend-sinatra.herokuapp.com"
        })
        servirtium.setCallerResponseHeaderReplacements({
          "https://todo-backend-sinatra.herokuapp.com": "http://localhost:61417",
          "todo-backend-sinatra.herokuapp.com": "localhost:61417"
        })
        servirtium.setCallerResponseBodyReplacement({
          "https://todo-backend-sinatra.herokuapp.com": "http://localhost:61417",
          "todo-backend-sinatra.herokuapp.com": "localhost:61417",
          "https": "http",
        })
        servirtium.setRecordResponseHeadersRemoval(["via", "server"])
        servirtium.setRecordRequestHeaderReplacements({"user-agent: .*": "user-agent: Chrome under Selenium control"})
        servirtium.setRecordResponseHeaderReplacements({"date: .*": "date: Wed, 1 Jan 2020 01:23:45 GMT"})
        await servirtium.startRecord()
        process.on('SIGTERM', async (code) => {
          await servirtium.writeRecord()
          await servirtium.endRecord()
        })
        break;
      case 'playback':
        servirtium = new Servirtium('https://todo-backend-sinatra.herokuapp.com')
        servirtium.setTestName("todobackend_test_suite")
        servirtium.setCallerRequestHeaderReplacements({
          "http://localhost:61417": "https://todo-backend-sinatra.herokuapp.com",
          "localhost:61417": "todo-backend-sinatra.herokuapp.com"
        })
        servirtium.setCallerResponseHeaderReplacements({
          "https://todo-backend-sinatra.herokuapp.com": "http://localhost:61417",
          "todo-backend-sinatra.herokuapp.com": "localhost:61417"
        })
        servirtium.setCallerResponseBodyReplacement({
          "https://todo-backend-sinatra.herokuapp.com": "http://localhost:61417",
          "todo-backend-sinatra.herokuapp.com": "localhost:61417",
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
