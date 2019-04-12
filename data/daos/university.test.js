require('../db')();
var dao = require('./university.dao.server');

// dao.truncateDatabase();

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
