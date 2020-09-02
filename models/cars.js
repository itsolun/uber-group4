var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = require('./user');


mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

var CarSchema = new mongoose.Schema({
    CarModel: String,
    Driver: { 
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
})

module.exports = mongoose.model('Cars', Carschema);