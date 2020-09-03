var mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const UserSchema = require('./user');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


var CarsSchema = new mongoose.Schema({
    CarModel: String,
    Name: { 
        type: Schema.Types.ObjectId, 
        ref: 'user',
        required: true,
     },
    license: {
        type: String,
        required: true,
    },
    platenumber: {
        type: String,
        required: true,
    },
    CarYear: Date,
    status: {
        type: String, default: "available"
    }
})

module.exports = mongoose.model('Car', CarsSchema);