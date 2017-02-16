var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var addDino = require('./module');

var test = function(req, res, next) {
   console.log('test')
    next();
}

app.use(test);
app.use(addDino);

app.use(bodyParser.json());


app.get('/', function(req, res){
    console.log(req.dinosaur);
    res.send('Work.')
});

app.listen(8000, function(){
    console.log('The server is listening on port 8000')
})