var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Quotes'});
});

router.get('/quotes', function (req, res) {

    var quotelist = [
        {
            'author': 'Aristotle',
            'description': 'It is during our darkest moments that we must focus to see the light.'
        },
        {
            'author': 'Edmund Burke',
            'description': 'The only thing necessary for the triumph of evil is for good men to do nothing.'
        },
        {
            'author': 'William Arthur Ward',
            'description': 'The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.'
        }
    ];

    res.render('quotelist', {
        "quotelist": quotelist
    });
});

router.get('/addquote', function (req, res) {
    res.render('newquote', {title: 'Add New Quote'});
});

//router.post('/addquote', function (req, res) {
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
//});

module.exports = router;
