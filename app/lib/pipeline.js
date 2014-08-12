'use strict';

var morgan = require('morgan');
//var bodyParser = require('body-parser');
var home = require('../controllers/home');

module.exports = function(app, express){

app.get('/', home.index);
app.get('/', home.all);



console.log('Pipline Read');
};
