import Servirtium, { IServirtium } from './servirtium'

var myArgs = process.argv.slice(2);

var servirtium

switch (myArgs[0]) {
    case 'record':
        servirtium = new Servirtium('https://todo-backend-sinatra.herokuapp.com')
        servirtium.setTestName("todobackend_test_suite.md")
        servirtium.startRecord(() => {
            // ?
        })
        break;
    case 'playback':
        servirtium = new Servirtium('https://todo-backend-sinatra.herokuapp.com')
        servirtium.setTestName("todobackend_test_suite.md")
        servirtium.startPlayback(() => {
            // ?
        })
        break;
    default:
        console.log('Oops, should have been record or playback');
}

