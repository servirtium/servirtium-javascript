import Servirtium, { IServirtium } from './servirtium'


const run = async() => {
    let myArgs = process.argv.slice(2);

    let servirtium: IServirtium

    switch (myArgs[0]) {
        case 'record':
            servirtium = new Servirtium('https://todo-backend-sinatra.herokuapp.com')
            servirtium.setTestName("todobackend_test_suite.md")
            await servirtium.startRecord()
            await servirtium.writeRecord()
            await servirtium.endRecord()
            break;
        case 'playback':
            servirtium = new Servirtium('https://todo-backend-sinatra.herokuapp.com')
            servirtium.setTestName("todobackend_test_suite.md")
            await servirtium.startPlayback()
            await servirtium.endPlayback()
            break;
        default:
            console.log('Oops, should have been record or playback');
    }
}

run()