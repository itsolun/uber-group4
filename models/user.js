const express = require('express');
const app = express();
app.use(express.json());
const router =express.Router();

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

  const Schema = mongoose.Schema;
  const UserSchema =Schema ({
     username:{
      type:Schema.Types.ObjectId, 
       required:true},
     password: String,
     email:String ,
     token:String ,
     role: String,
     currentLocation : Object,
     available: Boolean,
     mobileNumber:Number ,
      currentCar:{ type: Schema.Types.ObjectId, ref: 'car' }
    
 
  }) 

   module.exports = mongoose.model('User', Userschema);
