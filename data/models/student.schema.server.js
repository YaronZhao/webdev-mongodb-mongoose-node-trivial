const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    _id: Number,
    username: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    gradYear: Number,
    scholarship: {type: Number, min: 0}
}, {collection: 'students'});
