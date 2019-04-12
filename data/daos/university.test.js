require('../db')();
var dao = require('./university.dao.server');

dao.truncateDatabase();

//dao.populateDatabase();

// dao.createStudent({
//     "_id": 345,
//     "username": "charlie",
//     "password": "charlie",
//     "firstName": "Charlie",
//     "lastName": "Calvin",
//     "gradYear": 2020,
//     "scholarship": 15000
// }).then(response => console.log(response));

// dao.createQuestion({
//     "_id": 111,
//     "question": "CSS stands for Cascading Style Sheets.",
//     "points": 10,
//     "questionType": "TRUE_FALSE",
//     "trueFalse": {
//         "isTrue": true
//     }
// }).then(response => console.log(response));

// dao.answerQuestion(123, 432, {
//     "_id": 222,
//     "trueFalseAnswer": false
// }).then(response => console.log(response));

// dao.findAllStudents().then(response => console.log(response));

// dao.findStudentById(234).then(response => console.log(response));

// dao.findAllQuestions().then(response => console.log(response));

// dao.findQuestionById(432).then(response => console.log(response));

// dao.findAllAnswers().then(response => console.log(response));

// dao.findAnswerById(123).then(response => console.log(response));

// dao.findAnswersByStudent(123).then(response => console.log(response));

// dao.findAnswersByQuestion(321).then(response => console.log(response));

// dao.updateStudent(123, {"scholarship": 18000}).then(response => console.log(response));

// dao.updateQuestion(321, {"points": 5}).then(response => console.log(response));

// dao.updateAnswer(123, {"trueFalseAnswer": false}).then(response => console.log(response));

// dao.deleteStudent(123).then(response => console.log(response));

// dao.deleteQuestion(321).then(response => console.log(response));

// dao.deleteAnswer(678).then(response => console.log(response));
