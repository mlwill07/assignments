var express = require('express');
var personRoutes = express.Router();
var person = require('../models/person');

personRoutes.get('/', function(req, res){
    person.find(function(err, people){
        if(err) return res.status(500).send(err);
        res.send(people)
    })
})

//personRoutes.get('/:id', function(req, res){
//    person.findById(req.params.id, function(err, people){
//        if(err) return res.status(500).send(err);
//        res.send(people)
//    })
//})

//query objects & populate

personRoutes.get('/:id', function(req, res){
    person.findById(req.params.id)
        .populate('carsOwned') //takes a second param "make year" will populate just params - make and field, you can also populate multiple refs with a space "carsOwned owners" etc
        .exec(function(err, people){
        if(err) return res.status(500).send(err);
        res.send(people)
    })
})

personRoutes.post('/', function(req, res){
    var newPerson = new person(req.body);
    newPerson.save(function(err){
        if(err) return res.status(500).send(err);
        res.send(newPerson)
    })
})

personRoutes.put('/:id', function(req, res){
    person.findByIdAndUpdate(req.params.id, req.body, function(err, updatedPerson){
        if(err) return res.status(500).send(err);
        res.send(updatedPerson)
    })
})

personRoutes.delete('/:id', function(req, res){
    person.findByIdAndRemove(req.params.id, req.body, {new: true}, function(err, people){
        if(err) return res.status(500).send(err);
        res.send({message: "deleted!"})
    })
})


module.exports = personRoutes