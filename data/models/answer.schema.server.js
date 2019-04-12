const mongoose = require('mongoose');
const studentSchema = require('./student.schema.server');
const questionSchema = require('./question.schema.server');
module.exports = mongoose.Schema({
    _id: Number,
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: studentSchema
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: questionSchema
    },
    trueFalseAnswer: Boolean,
    multipleChoiceAnswer: Number
}, {collection: 'answers'});
