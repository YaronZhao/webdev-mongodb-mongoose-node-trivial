const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    _id: Number,
    questionsContained: [{
        type: Number,
        ref: 'QuestionModel'
    }]
}, {collection: 'quiz-widgets'});
