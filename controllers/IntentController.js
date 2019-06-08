const df = require('../config/Dialogflow')

module.exports = {
    detectIntent(req, res) {

        const request = {
            session : df.sessionPath,
            queryInput : {
                text : {
                    text: req.body.text,
                    languageCode: 'id'
                }
            }
        };

        df.sessionClient.detectIntent(request)
            .then(result => {
                const queryResult = result[0].queryResult
                console.log(queryResult)
                res.json({
                    response: queryResult.fulfillmentText,
                    contexts: queryResult.outputContexts[0] ? queryResult.outputContexts[0].name : '',
                    intent: queryResult.intent.displayName 
                })

            })
            .catch(err => console.log(err))
    }
}