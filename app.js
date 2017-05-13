var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var mongo = require('mongodb');
//var monk = require('monk');
//var db = monk('localhost:27017/quotes');

var pg = require('pg');

var routes = require('./routes/index');
var quotes = require('./routes/quotes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//// Database
//app.use(function (req, res, next) {
//    req.db = db;
//    next();
//});

pg.defaults.ssl = true;
pg.connect(process.env.DATABASE_URL, function (err, client) {
    if (err)
        throw err;

    console.log('Connected to postgres! Getting schemas...');

    client
            .query('SELECT table_schema,table_name FROM information_schema.tables;')
            .on('row', function (row) {
                console.log(JSON.stringify(row));
            });
});

// Routes
app.use('/', routes);
app.use('/quotes', quotes);


/// Error handlers

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;