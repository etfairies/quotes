var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb');
var db;
var ObjectId = require('mongodb').ObjectId;

// Connect  to the database
MongoClient.connect('mongodb://etfairies:etfairies@ds143221.mlab.com:43221/heroku_lkqmfpvw', function (err, database) {
    if (err)
        return console.log(err);
    db = database;
});

// Get index page
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Quotes'});
});

// List all quotes from the database
router.get('/quotes', function (req, res) {
    db.collection('quotes').find().toArray(function (err, results) {
        if (err) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        }

        res.render('quotelist', {
            "quotelist": results
        });
    });
});

// Get 'add quote' page 
router.get('/addquote', function (req, res) {
    res.render('newquote', {title: 'Add New Quote'});
});

// Add new quote to database
router.post('/addquote', function (req, res) { 
    var quote = {
        author: req.body.author,
        description: req.body.description,
        likes: 0
    }
    
    db.collection('quotes').save(quote, function (err, result) {
        if (err) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        }
    });
    res.redirect("/quotes");
});

// Increment 'likes' of given quote
router.post('/quotes', function (req, res) {
    db.collection('quotes').update({_id: ObjectId(req.body.quoteid)}, {
        $inc: {likes: 1}
    });

    res.redirect("/quotes");
});

module.exports = router;
