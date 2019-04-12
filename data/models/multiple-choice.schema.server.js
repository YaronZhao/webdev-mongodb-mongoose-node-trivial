const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    choices: {type: String, required: true},
    correct: {type: Number, required: true}
});
