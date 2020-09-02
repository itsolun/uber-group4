var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = require('./user');


mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

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

module.exports = mongoose.model('Car', Carschema);