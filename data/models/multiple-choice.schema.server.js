const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    _id: Number,
    choices: {type: String, required: true},
    correct: {type: Number, required: true}
});
