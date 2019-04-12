const studentModel = require('../models/student.model.server');
const questionModel = require('../models/question.model.server');
const answerModel = require('../models/answer.model.server');
const quizWidgetModel = require('../models/quiz-widget.model.server');

const students = require('../student.mock');
const questions = require('../question.mock');
const answers = require('../answer.mock');

truncateDatabase = () =>
    answerModel.deleteMany({})
        .then(response => {
            if (response.ok) {
                console.log(response);
                return quizWidgetModel.deleteMany({})
            }
        })
        .then(response => {
            if (response.ok) {
                console.log(response);
                return questionModel.deleteMany({})
            }
        })
        .then(response => {
            if (response.ok) {
                console.log(response);
                return studentModel.deleteMany({})
            }
        })
        .then(response => {
            console.log(response)
        });

populateDatabase = () =>
    studentModel.insertMany(students)
        .then(response => {
            console.log(response);
            return questionModel.insertMany(questions)
        })
        .then(response => {
            console.log(response)
            return answerModel.insertMany(answers)
        })
        .then(response => console.log(response));

module.exports = {
    truncateDatabase,
    populateDatabase
};
