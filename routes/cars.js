const express = require("express");
const router = express.Router();
const Schema = require('mongoose').Schema;
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Car = require("../models/car");


router.put('/status', function(req, res) {
    var carId = req.header('car_id');
    var status = req.header('status');

    car.find(carId, function (err, car) {
        if(err) {
            res.json({
                valid: false,
                message: "no car data"
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
    car.find(carId, function (err, car) {
        if(err) {
            res.json({
                valid: false,
                message: "unvalid ID"
            });
        }
        else {
            User.find(car.name, function (err, user) {
                if(err) {
                    res.json({
                        valid: false,
                        message: "Error"
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