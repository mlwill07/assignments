var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var uuid = require('uuid');
var mongoose = require('mongoose')
var path = require('path');
var port = 8000;
var issues = require('./models/issue')

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.use('/issues', require("./routes/issuesRoute"))

mongoose.connect("mongodb://localhost/issues", function(err){
    if(err) throw err;
    console.log("connected to the database")
});

app.listen(port, function(){
    console.log('listening on port ' + port);
})