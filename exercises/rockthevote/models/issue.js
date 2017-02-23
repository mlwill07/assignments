var mongoose = require('mongoose');

var issueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    vote_count: Number,
    comments: [String]
})

module.exports = mongoose.model("issue", issueSchema);