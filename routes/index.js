var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb');
var db;

MongoClient.connect('mongodb://etfairies:etfairies@ds143221.mlab.com:43221/heroku_lkqmfpvw', function (err, database) {
    if (err) return console.log(err);
    db = database;
});

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Quotes'});
});

router.get('/quotes', function (req, res) {

//    var quotelist = [
//        {
//            'author': 'Aristotle',
//            'description': 'It is during our darkest moments that we must focus to see the light.'
//        },
//        {
//            'author': 'Edmund Burke',
//            'description': 'The only thing necessary for the triumph of evil is for good men to do nothing.'
//        },
//        {
//            'author': 'William Arthur Ward',
//            'description': 'The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.'
//        }
//    ];
//
//    res.render('quotelist', {
//        "quotelist": quotelist
//    });
    
//    var cursor = db.collection('quotes').find();
    
    db.collection('quotes').find().toArray(function(err, results) {
            res.render('quotelist', {
            "quotelist": results
        });
    });
});

router.get('/addquote', function (req, res) {
    res.render('newquote', {title: 'Add New Quote'});
});

router.post('/addquote', function (req, res) {
    console.log(req.body);
    
    db.collection('quotes').save(req.body, function (err, result) {
        if (err) {
            return console.log(err);
        }
        
        console.log('saved to database');
    })
    
    res.redirect("/quotes");
//    var db = req.db;
//    
//    var author = req.body.author;
//    var description = req.body.description;
//
//    var collection = db.get('quotecollection');
//
//    collection.insert({
//        "author": author,
//        "description": description
//    }, function (err, doc) {
//        if (err) {
//            res.send("Could not save quote");
//        } else {
//            res.redirect("quotelist");
//        }
//    });
});

module.exports = router;
