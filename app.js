const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");
const path = require("path");



var cars = require('./routes/cars')
const CarsSchema = require('./models/car.js')


mongoose.connect((config.database),{ useNewUrlParser: true, useUnifiedTopology: true});//,{useMongoClient:true});

//On connection
mongoose.connection.on('connected',()=>{
    console.log('connected to database: '+config.database);
});

// On Error
mongoose.connection.on('error',(err)=>{
    console.log('Database Error: '+err);
});

const users = require('./routes/users');
var cars = require('./routes/cars')

app.use(cors());

app.use(bodyParser.json())

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(app,passport);

app.use('/car', CarsSchema)

app.get('/',(req,res) => {
    res.send ('Welcome to uber!');
})


app.use(express.static('public'))


const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))