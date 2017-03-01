var express = require('express');
var carRoutes = express.Router();
var Car = require('../models/car');

carRoutes.get('/', function(req, res){
    Car.find(function(err, cars){
        if(err) return res.status(500).send(err);
        res.send(cars)
    })
})

carRoutes.get('/:id', function(req, res){
    Car.findById(req.params.id, function(err, cars){
        if(err) return res.status(500).send(err);
        res.send(cars)
    })
})

carRoutes.post('/', function(req, res){
    var newCar = new Car(req.body);
    newCar.save(function(err){
        if(err) return res.status(500).send(err);
        res.send(newCar)
    })
})

carRoutes.put('/:id', function(req, res){
    Car.findByIdAndUpdate(req.params.id, req.body, function(err, updatedCar){
        if(err) return res.status(500).send(err);
        res.send(updatedCar)
    })
})

carRoutes.delete('/:id', function(req, res){
    Car.findByIdAndRemove(req.params.id, req.body, {new: true}, function(err, car){
        if(err) return res.status(500).send(err);
        res.send({message: "deleted!"})
    })
})

module.exports = carRoutes;