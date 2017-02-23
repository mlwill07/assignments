var express = require('express');
var bountyRoute = express.Router();
var bounty = require("../models/bounty");

bountyRoute.get("/", function(req, res){
    bounty.find(function(err, bounties){
        if(err) return res.status(500).send(err);
        res.send(bounties);
    })
})

bountyRoute.get("/:id", function(req, res){
    bounty.findById(req.params.id, function(err, bounties){
        if(err) return res.status(500).send(err);
        res.send(bounties);
    })
})

bountyRoute.post("/", function(req, res){
    var bountyToAdd = new bounty(req.body);
    bountyToAdd.save(function(err){
        if(err) return res.status(500).send(err);
        res.status(200).send(bountyToAdd)
    })
})

bountyRoute.put("/:id", function(req, res){
    bounty.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedBounty){
        if(err) return res.status(500).send(err);
        res.send(updatedBounty);
    })
})

bountyRoute.delete("/:id", function(req, res){
    bounty.findByIdAndRemove(req.params.id, function(err){
        if(err) return res.status(500).send(err);
        res.send({message: "removed bounty"})
    })
})


module.exports = bountyRoute;