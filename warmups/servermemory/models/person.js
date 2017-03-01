var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: String,
    address: {
        street: String,
        city: String,
        state: String
    },
    carsOwned: [{
        type: Schema.Types.ObjectId,
        ref: "car"
    }]
})

module.exports = mongoose.model('person', personSchema);