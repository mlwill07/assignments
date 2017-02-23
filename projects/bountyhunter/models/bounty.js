var mongoose = require('mongoose');


var bountySchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: Boolean,
    bounty: Number,
    type: String,
    imgUrl: String
})

module.exports = mongoose.model('bounty', bountySchema)