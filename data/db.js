module.exports = function () {
    const mongoose = require('mongoose');
    // const databaseName = 'white-board';
    var connectionString = 'mongodb://heroku_q3s8bglg:9q8dcjag656vh4kn47b399akom@ds139576.mlab.com:39576/heroku_q3s8bglg/';
    // connectionString += databaseName;
    mongoose.connect(connectionString, { useNewUrlParser: true });
};
