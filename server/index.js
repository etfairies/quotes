const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());

//Database
var MongoClient = require('mongodb');
var db;
MongoClient.connect('mongodb://etfairies:etfairies@ds143221.mlab.com:43221/heroku_lkqmfpvw', function (err, database) {
    if (err)
        return console.log(err);
    db = database;
});

var ObjectId = require('mongodb').ObjectId;

// Priority serve any static files.
app.use(express.static(path.join(__dirname, '../react-ui/build')));


// Requests

// Get index page
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

// List all quotes from the database
app.get('/api/quotes', function (req, res) {
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
app.post('/api/add', function (req, res) {
    var quote = {
        author: req.body.author,
        description: req.body.description,
        likes: 0
    }

    db.collection('quotes').save(quote);
});

// Increment 'likes' of given quote
app.post('/api/like', function (req, res) {
    db.collection('quotes').update({_id: ObjectId(req.body.quoteid)}, {
        $inc: {likes: 1}
    });
});

// Delete quote
app.post('/api/delete', function (req, res) {
    db.collection('quotes').remove({_id: ObjectId(req.body.quoteid)});
    res.redirect("/quotes");
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/public', 'index.html'));
});

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});