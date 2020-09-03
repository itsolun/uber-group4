const express = require('express');
const app = express();
app.use(express.json());
const router =express.Router();

const mongoose = require("mongoose");

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Online-store:Tokatoka12@cluster0.2sv4w.gcp.mongodb.net/Online-shop?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

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

   module.exports = mongoose.model('User', UserSchema);
