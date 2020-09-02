const express = require('express');
const app = express();
app.use(express.json());
const router =express.Router();

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

const tripsSchema =new mongoose.Schema ({
  startPoint:Object,
  destination:Object,
  arrivalTime:Number,
  startTime:Number,
  cost:Number,
  driver:{ type: Schema.Types.ObjectId, ref: 'user' },
  rider:{ type: Schema.Types.ObjectId, ref: 'user' },
  car:{ type: Schema.Types.ObjectId, ref: 'car' }
}) 

  const ride = mongoose.model('trip', rideSchema);
  
  module.exports=router;