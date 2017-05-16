var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb');
var db;

MongoClient.connect('mongodb://etfairies:etfairies@ds143221.mlab.com:43221/heroku_lkqmfpvw', function (err, database) {
    if (err)
        return console.log(err);
    db = database;
});

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Quotes'});
});

router.get('/quotes', function (req, res) {
    db.collection('quotes').find().toArray(function (err, results) {
        res.render('quotelist', {
            "quotelist": results
        });
    });
});

router.get('/addquote', function (req, res) {
    res.render('newquote', {title: 'Add New Quote'});
});

router.post('/addquote', function (req, res) {
     db.collection('quotes').save(req.body, function (err, result) {
        if (err) {
            return console.log(err);
        }
    });
    res.redirect("/quotes");
});

module.exports = router;
