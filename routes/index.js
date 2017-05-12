var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/helloworld', function (req, res) {
    res.render('helloworld', {title: 'Hello World!'});
});

//router.get('/quotelist', function (req, res) {
//    var db = req.db;
//    var collection = db.get('quotecollection');
//    collection.find({}, {}, function (e, docs) {
//        res.render('quotelist', {
//            "quotelist": docs
//        });
//    });
//});

//router.get('/newquote', function (req, res) {
//    res.render('newquote', {title: 'Add New Quote'});
//});

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
