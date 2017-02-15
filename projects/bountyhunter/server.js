var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var uuid = require("uuid")
var path = require('path');

app.use(bodyParser.json());

app.use(express.static(path.join("public")))


var llamas = [
    {
        firstname: 'Joe',
        lastName: 'Jedi',
        living: false,
        bounty: 2000,
        type: 'Jedi',
        imgUrl: 'http://www.todayifoundout.com/wp-content/uploads/2014/09/jedi.jpg',
        id: '123456'
    },
    {
        firstname: 'Sam',
        lastName: 'Sith',
        living: true,
        bounty: 1000,
        type: 'Sith',
        imgUrl: 'http://i210.photobucket.com/albums/bb33/Shadow_Enclave/Rieka%20Darkstar/GunganSithLord.jpg',
        id: '654321'
    }
];

app.get("/bounty", function (req, res) {
    res.send(llamas);
})

app.get("/bounty/:id", function (req, res) {
    for (var i = 0; i < llamas.length; i++) {
        if (llamas[i].id === req.params.id) {
            return res.send(llamas[i])
        }
    }
    res.status(404).send({
        message: "not found"
    })
})


app.post("/bounty", function (req, res) {
    newBounty = req.body;
    newBounty.id = uuid.v4();
    llamas.push(newBounty);
    res.send(newBounty)
})



app.put("/bounty/:id", function (req, res) {
    for (var i = 0; i < llamas.length; i++) {
        if (llamas[i].id === req.params.id) {
            for (var key in req.body) {
                if(req.body[key] != undefined){
                    llamas[i][key] = req.body[key]
                }
            }
            return res.send(llamas[i])
        }
    }
    res.status(404).send({
        message: "not found"
    })

})

app.delete("/bounty/:id", function (req, res) {
    for (var i = 0; i < llamas.length; i++) {
        if (llamas[i].id === req.params.id) {
            llamas.splice(i, 1);
        }
    }
    res.send(llamas)
})

app.listen(8000, function () {
    console.log('server is listening on port 8000')
})