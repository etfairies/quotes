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
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
});

// List all quotes from the database
router.get('/quotes', function (req, res) {
    db.collection('quotes').find().toArray(function (err, results) {
        res.set('Content-Type', 'application/json');

        if (err) {
            res.status(err.status || 500);
        }
        var quotelist = {"quotes": results};
        res.send(quotelist);
    });
});

// Add new quote to database
router.post('/add', function (req, res) {
    var quote = {
        author: req.body.author,
        description: req.body.description,
        likes: 0
    }

    db.collection('quotes').save(quote);
    res.redirect("/quotes");
});

// Increment 'likes' of given quote
router.post('/like', function (req, res) {
    db.collection('quotes').update({_id: ObjectId(req.body.quoteid)}, {
        $inc: {likes: 1}
    });

    res.redirect("/quotes");
});

// Delete quote
router.post('/delete', function (req, res) {
    db.collection('quotes').remove({_id: ObjectId(req.body.quoteid)});
    res.redirect("/quotes");
});

module.exports = router;
