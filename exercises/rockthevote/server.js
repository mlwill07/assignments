var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var uuid = require('uuid');
var path = require('path');
var port = 8000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));


var issues = [
    {
        name: "Peanut Butter",
        description: "Not enough peanut butter available in the world",
        vote_count: 4,
        comments: ["Peanut butter is love","Keep the peanuts roasting!"],
        _id: '123'
    },
    {
        name: "Taco Tuesday",
        description: "Too many tacos, not enough burritos, let's spread the burrito joy.",
        vote_count: 10,
        comments: ["Taco Tuesday is for tacos!", "this is amazing", "love more tacos and burritos"],
        _id: '456'
    }
];

app.get('/issues', function(req, res){
    res.send(issues);
})

app.get('/issues/:_id', function(req, res){
    for( var i = 0; i < issues.length; i++){
        if(issues[i]._id === req.params._id){
            return res.send(issues[i])
        }
    }
    res.status(404).send({
        message: "not found"
    })
})

app.post('/issues', function(req, res){
    var newIssue = req.body;
    newIssue._id = uuid.v4();
    issues.push(newIssue);
    res.send(newIssue);
})

app.put('/issues/:_id', function(req, res){
    for (var i = 0; i < issues.length; i++){
        if(issues[i]._id === req.params._id){
            for(var key in req.body) {
               issues[i][key] = req.body[key];
            }
        return res.send(issues[i])
        }
        
    }
    res.status(404).send({
        message: "not found"
    })
})

app.delete('/issues/:_id', function(req, res){
    for (var i = 0; i < issues.length; i++){
        if (issues[i]._id === req.params._id){
            issues.splice(i, 1);
        }
    }
    res.send(issues);
})

app.listen(port, function(){
    console.log('listening on port ' + port);
})