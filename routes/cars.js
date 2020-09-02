const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Car = require("../models/car");
router.put('/updatecarStatus', function(req, res) {
    var carId = req.header('car_id');
    var status = req.header('status');

    car.findById(carId, function (err, car) {
        if(err) {
            res.json({
                valid: false,
                message: "not found"
            });
        }
        else {
            car.status = status;
            car.save(function (err, d) {
                if(err) {
                    res.json({
                        valid: false,
                        message: "error"
                    });
                }
                else {
                    res.json({
                        valid: true,
                        message: "",
                        car_id: d._id
                    });
                }
            });
        }
    });
});

router.get('/getcarData', function (req, res, next) {

    var carId = req.header('car_id');
    car.findById(carId, function (err, car) {
        if(err) {
            res.json({
                valid: false,
                message: "not valid ID"
            });
        }
        else {
            User.findById(car.personalData, function (err, user) {
                if(err) {
                    res.json({
                        valid: false,
                        message: "wrong operation"
                    });
                }
                else {
                    res.json({
                        valid: true,
                        user_data: user,
                        car_data: car,
                        message: ""
                    });
                }
            });
        }
    });
});
module.exports = router;