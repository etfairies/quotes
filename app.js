var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var mongo = require('mongodb');
//var monk = require('monk');
//var db = monk('localhost:27017/nodetest1');
var index = require('./routes/index');
//var quotes = require('./routes/quotes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(function(req, res, next) {
//    req.db = db;
//    next();
//});

app.use('/', index);
//app.use('/quotes', quotes);

module.exports = app;