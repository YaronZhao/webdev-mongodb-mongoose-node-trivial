const mongoose = require('mongoose');
const questionSchema = require('./question.schema.server');
module.exports = mongoose.Schema({
    _id: Number,
    questionsContained: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: questionSchema
    }]
}, {collection: 'quiz-widgets'});
