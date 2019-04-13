const universityDao = require('../data/daos/university.dao.server');

module.exports = app => {
    truncateDatabase = (req, res) =>
        universityDao.truncateDatabase()
            .then(response => res.json(response));

    populateDatabase = (req, res) =>
        universityDao.populateDatabase()
            .then(response => res.json(response));

    createStudent = (req, res) =>
        universityDao.createStudent(req.body)
            .then(student => res.json(student), function (err) {
                res.send(err)
            });

    createQuestion = (req, res) =>
        universityDao.createQuestion(req.body)
            .then(question => res.json(question), function (err) {
                res.send(err)
            });

    answerQuestion = (req, res) =>
        universityDao.answerQuestion(
            req.params.studentId,
            req.params.questionId,
            req.body)
            .then(answer => res.json(answer), function (err) {
                res.send(err)
            });

    findAllStudents = (req, res) =>
        universityDao.findAllStudents()
            .then(students => res.json(students));

    findStudentById = (req, res) =>
        universityDao.findStudentById(req.params.studentId)
            .then(student => res.json(student));

    findAllQuestions = (req, res) =>
        universityDao.findAllQuestions()
            .then(questions => res.json(questions));

    findQuestionById = (req, res) =>
        universityDao.findQuestionById(req.params.questionId)
            .then(question => res.json(question));

    findAllAnswers = (req, res) =>
        universityDao.findAllAnswers()
            .then(answers => res.json(answers));

    findAnswerById = (req, res) =>
        universityDao.findAnswerById(req.params.answerId)
            .then(answer => res.json(answer));

    findAnswersByStudent = (req, res) =>
        universityDao.findAnswersByStudent(req.params.studentId)
            .then(answers => res.json(answers));

    findAnswersByQuestion = (req, res) =>
        universityDao.findAnswersByQuestion(req.params.questionId)
            .then(answers => res.json(answers));

    findAllAnswersByStudent = (req, res) =>
        universityDao.findAllAnswersByStudent(
            req.params.studentId,
            req.params.questionId)
            .then(answers => res.json(answers));

    findAllAnswersByQuestion = (req, res) =>
        universityDao.findAllAnswersByQuestion(
            req.params.questionId,
            req.params.studentId)
            .then(answers => res.json(answers));

    updateStudent = (req, res) =>
        universityDao.updateStudent(req.params.studentId, req.body)
            .then(response => res.json(response));

    updateQuestion = (req, res) =>
        universityDao.updateQuestion(req.params.questionId, req.body)
            .then(response => res.json(response));

    updateAnswer = (req, res) =>
        universityDao.updateAnswer(req.params.answerId, req.body)
            .then(response => res.json(response));

    deleteStudent = (req, res) =>
        universityDao.deleteStudent(req.params.studentId)
            .then(students => res.json(students));

    deleteQuestion = (req, res) =>
        universityDao.deleteQuestion(req.params.questionId)
            .then(questions => res.json(questions));

    deleteAnswer = (req, res) =>
        universityDao.deleteAnswer(req.params.answerId)
            .then(answers => res.json(answers));

    app.delete('/api/all', truncateDatabase);
    app.post('/api/populate', populateDatabase);
    app.post('/api/student', createStudent);
    app.post('/api/question', createQuestion);
    app.post('/api/student/:studentId/question/:questionId/answer', answerQuestion);
    app.get('/api/student', findAllStudents);
    app.get('/api/student/:studentId', findStudentById);
    app.get('/api/question', findAllQuestions);
    app.get('/api/question/:questionId', findQuestionById);
    app.get('/api/answer', findAllAnswers);
    app.get('/api/answer/:answerId', findAnswerById);
    app.get('/api/student/:studentId/answer', findAnswersByStudent);
    app.get('/api/question/:questionId/answer', findAnswersByQuestion);
    app.get('/api/student/:studentId/question/:questionId/answer', findAllAnswersByStudent);
    app.get('/api/question/:questionId/student/:studentId/answer', findAllAnswersByQuestion);
    app.put('/api/student/:studentId', updateStudent);
    app.put('/api/question/:questionId', updateQuestion);
    app.put('/api/answer/:answerId', updateAnswer);
    app.delete('/api/student/:studentId', deleteStudent);
    app.delete('/api/question/:questionId', deleteQuestion);
    app.delete('/api/answer/:answerId', deleteAnswer);
};
