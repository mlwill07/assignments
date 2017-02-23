var express = require("express");
var issuesRoute = express.Router();
var issueItem = require('../models/issue');

issuesRoute.get("/", function(req, res){
    var query = {};
    if(req.query.name) query.name = req.query.name;
    issueItem.find(query, function(err, issues){
        if(err) return res.status(500).send(err);
        res.send(issues)
    })
});

issuesRoute.get("/:id", function(req, res){
    issueItem.findById(req.params.id, function(err, issue){
        if(err) return res.status(500).send(err);
        res.send(issue)
    })
});

issuesRoute.post("/", function(req, res){
    var issue = new issueItem(req.body);
    issue.save(function(err){
        if(err) return res.status(500).send(err);
        res.status(200).send(issue);
    })
});

issuesRoute.put("/:id", function(req, res){
    issueItem.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedIssue){
        if(err) return res.status(500).send(err);
        res.send(updatedIssue);
    })
});

issuesRoute.delete("/:id", function(req, res){
    issueItem.findByIdAndRemove(req.params.id, function(err, issue){
        if(err) return res.status(500).send(err);
        res.send({message: "removed issue"})
    })
});

module.exports = issuesRoute;