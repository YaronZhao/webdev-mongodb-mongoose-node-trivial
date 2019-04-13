var express = require('express');
var app = express();
require('./data/db')();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./services/university.service.server')(app);

app.listen(process.env.PORT;
