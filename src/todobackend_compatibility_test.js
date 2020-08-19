const { Servirtium } = require('../dist')

const run = async() => {
  try {
    let myArgs = process.argv.slice(2);

    let servirtium

    switch (myArgs[0]) {
      case 'record':
        servirtium = new Servirtium('https://todo-backend-sinatra.herokuapp.com')
        servirtium.setTestName("todobackend_test_suite")
        servirtium.replaceRequestHeaders('host', 'localhost:61417')
        servirtium.replaceResponseHeaders('host', 'localhost:61417')
        servirtium.replaceContentByRegex({'https:\/\/todo-backend-sinatra\.herokuapp\.com': 'http://localhost:61417'})
        await servirtium.startRecord()
        process.on('SIGTERM', async (code) => {
          await servirtium.writeRecord()
          await servirtium.endRecord()
        })
        break;
      case 'playback':
        servirtium = new Servirtium('https://todo-backend-sinatra.herokuapp.com')
        servirtium.setTestName("todobackend_test_suite")
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
