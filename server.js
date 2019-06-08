const express = require('express')
require('dotenv').config()
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 4000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/user', require('./routes/users'))
app.use('/intent', require('./routes/intents'))

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(PORT, () => console.log("Running On port "+ PORT))