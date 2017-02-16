var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var uuid = require('uuid');
var port = 8000;

app.use(bodyParser.json());

var todos = [
    {
        name: "Buy bread",
        description: "whole wheat",
        imageUrl: "http://img.foodnetwork.com/FOOD/2012/09/11/HE_whole-wheat-bread_s4x3_lead.jpg",
        completed: false,
        _id: '1234'
    },
    {
        name: "Buy milk",
        description: "skim milk",
        imageUrl: "",
        completed: false,
        _id: '4567'
}
];

app.get('/todos', function (req, res) {
    res.send(todos);
});

app.get('/todos/:_id', function (req, res) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i]._id === req.params._id) {
            return res.send(todos[i])
        }
    }
    res.status(404).send({
        message: "not found"
    })
})

app.post('/todos', function (req, res) {
    newItem = req.body;
    newItem._id = uuid.v4();
    todos.push(newItem);
    res.send(newItem);
})

app.put('/todos/:_id', function (req, res) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i]._id === req.params._id) {
            for (var key in req.body) {
                todos[i][key] = req.body[key]
            }

            return res.send(todos[i])
        }
    }
    res.status(404).send({
        message: "not found"
    })
})

app.delete('/todos/:_id', function (req, res) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i]._id === req.params._id) {
            todos.splice(i, 1)
        }
    }
    res.send(todos);
})

app.listen(port, function () {
    console.log("listening on port " + port);
})