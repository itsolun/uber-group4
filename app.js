let express = require('express')
let app = express()
const mongoose = require('mongoose')
let bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/',(req,res) => {
    res.send ('Welcome to uber!');
})


app.use(express.static('public'))


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))