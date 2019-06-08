const router = require('express').Router()
const IntentController = require('../controllers/IntentController')

router.post('/', IntentController.detectIntent)

module.exports = router