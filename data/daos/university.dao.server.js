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

createStudent = student =>
    studentModel.create(student);

createQuestion = question =>
    questionModel.create(question);

answerQuestion = (studentId, questionId, answer) => {
    answer.student = studentId;
    answer.question = questionId;
    return answerModel.create(answer);
};

findAllStudents = () =>
    studentModel.find();

findStudentById = studentId =>
    studentModel.findById(studentId);

findAllQuestions = () =>
    questionModel.find();

findQuestionById = questionId =>
    questionModel.findById(questionId);

findAllAnswers = () =>
    answerModel.find();

findAnswerById = answerId =>
    answerModel.findById(answerId);

findAnswersByStudent = studentId =>
    answerModel.find({student: studentId});

findAnswersByQuestion = questionId =>
    answerModel.find({question: questionId});

module.exports = {
    truncateDatabase,
    populateDatabase,
    createStudent,
    createQuestion,
    answerQuestion,
    findAllStudents,
    findStudentById,
    findAllQuestions,
    findQuestionById,
    findAllAnswers,
    findAnswerById,
    findAnswersByStudent,
    findAnswersByQuestion
};
