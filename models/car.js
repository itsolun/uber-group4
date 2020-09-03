var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = require('./user');



mongoose.connect("mongodb+srv://Uberdb:Toqa12@cluster0.2sv4w.gcp.mongodb.net/Uberdb?retryWrites=true&w=majority", { useNewUrlParser: true });
mongoose.createConnection("mongodb+srv://Uberdb:Toqa12@cluster0.2sv4w.gcp.mongodb.net/Uberdb?retryWrites=true&w=majority", { useNewUrlParser: true });


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