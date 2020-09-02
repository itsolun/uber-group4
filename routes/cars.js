var mongoose = require('mongoose');
var schema = mongoose.Schema;

var CarSchema = new mongoose.Schema({
    CarModel: String,
    Driver: String,
    license: {
        type: Boolean,
        required: true,
    },
    platenumber: Number,
    CarYear: Date,
})

module.exports = mongoose.route('Cars', Carschema);