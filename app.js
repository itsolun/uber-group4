let express = require('express')
let app = express()
const mongoose = require('mongoose')
let bodyParser = require('body-parser')


const CarsSchema = require('./models/car.js')


app.use(bodyParser.json())

app.use('/car', CarsSchema)

app.get('/',(req,res) => {
    res.send ('Welcome to uber!');
})


app.use(express.static('public'))


const PORT = process.env.PORT || 6000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))