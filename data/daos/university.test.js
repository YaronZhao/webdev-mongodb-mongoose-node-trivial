require('../db')();
var dao = require('./university.dao.server');
// dao.truncateDatabase();
dao.populateDatabase();
