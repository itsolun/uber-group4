let express = require('express')
let app = express()
const mongoose = require('mongoose')

app.get('/',(req,res) => {
    res.send ('Welcome to uber!');
})

app.listen(3000);