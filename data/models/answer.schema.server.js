const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    _id: Number,
    student: {
        type: Number,
        ref: 'StudentModel'
    },
    question: {
        type: Number,
        ref: 'QuestionModel'
    },
    trueFalseAnswer: Boolean,
    multipleChoiceAnswer: Number
}, {collection: 'answers'});
