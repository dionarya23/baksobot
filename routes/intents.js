const router = require('express').Router()
const IntentController = require('../controllers/IntentController')
const checkToken = require('../middleware/checkToken')

router.post('/', checkToken.checkToken, IntentController.detectIntent)

module.exports = router