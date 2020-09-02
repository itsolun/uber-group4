var mongoose = require('mongoose');
const router =express.Router();

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

var CarSchema = new mongoose.Schema({
    CarModel: String,
    Driver: String,
    license: {
        type: String,
        required: true,
    },
    platenumber: {
        type: Number,
        required: true,
    },
    CarYear: Date,
})

module.exports = mongoose.router('Cars', Carschema);