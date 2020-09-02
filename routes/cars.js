var mongoose = require('mongoose');
const router =express.Router();

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

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

module.exports = mongoose.router('Cars', Carschema);