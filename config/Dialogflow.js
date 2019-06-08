const dialogflow = require('dialogflow')
const uuid       = require('uuid')

const sessionClient = new dialogflow.SessionsClient({
    keyFilename: process.env.FILENAME
})

const sessionPath = sessionClient.sessionPath(process.env.PROJECT_ID, uuid.v4())

module.exports = {
    ...sessionClient,
    ...sessionPath
}