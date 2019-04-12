const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    _id: Number,
    isTrue: {type: Boolean, required: true}
});
