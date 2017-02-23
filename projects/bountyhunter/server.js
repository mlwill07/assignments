var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var uuid = require("uuid")
var path = require('path');
var bounties = require('./models/bounty')

app.use(bodyParser.json());

app.use(express.static(path.join("public")))

app.use("/bounty", require("./routes/bountyRoute"))

mongoose.connect("mongodb://localhost/bounties", function(err){
    if(err) throw err;
    console.log("connected to the database")
})

mongoose.Promise = global.Promise;

app.listen(8000, function () {
    console.log('server is listening on port 8000')
})