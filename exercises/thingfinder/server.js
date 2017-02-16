var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var fruits = [
    {
        name: 'banana',
        color: 'yellow'
    },
    {
        name: 'apple',
        color: 'red'
    },
    {
        name: 'apple',
        color: 'green'
    },
    {
        name: 'mango',
        color: 'red'
    }
];

app.get('/fruits', function(req, res){
    
    if(Object.keys(req.query).length > 0) {
        var output = [];
        for (var i = 0; i < fruits.length; i++) {
            if(fruits[i].name === req.query.name) {
                output.push(fruits[i]);
            }
        }
        res.send(output);
    } else {
        res.send(fruits);
    }
    
});

app.listen(8000, function(){
    console.log('The server is listening on port 8000');
})