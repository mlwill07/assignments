var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var port = process.env.PORT || 8000;
var morgan = require('morgan')

var car = require('./models/car');
var person = require('./models/person');

app.use(bodyParser.json());
app.use(morgan("dev"))

app.use("/car", require("./routes/carRoutes"))
app.use("/person", require("./routes/personRoutes"))


mongoose.connect('mongodb://localhost/cars', function(err){
    if(err) throw err
    console.log('connected to the datatbase')
})

app.listen(port, function(){
    console.log("Listening on port: " + port)
})