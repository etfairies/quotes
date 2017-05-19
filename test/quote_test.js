var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../bin/www');
var should = chai.should();
var expect = chai.expect;
var MongoClient = require('mongodb');
var ObjectId = require('mongodb').ObjectId;

chai.use(chaiHttp);


describe('Quotes', function () {
    // Database connection
    var database = null;

    before(function (done) {
        MongoClient.connect('mongodb://etfairies:etfairies@ds143071.mlab.com:43071/heroku_nt73w1pp').then(function (db) {
            database = db;
            return database.dropDatabase();
        }).then(function () {}).then(done, done);
    });

    afterEach(function (done) {
        database.dropDatabase().then(function () {}).then(done, done);
    });

    //Tests

    it('should get index page on / GET', function (done) {
        chai.request(server)
                .get('/')
                .end(function (err, res) {
                    res.should.have.status(200);
                    done();
                });
    });

    it('should list all quotes on /quotes GET', function (done) {

        chai.request(server)
                .get('/quotes')
                .end(function (err, res) {
                    res.should.have.status(200);
//                    res.body.should.be.a('array');
                    done();
                });
    });

    it('should add a single quote on /addquote POST', function (done) {
        chai.request(server)
                .get('/addquote')
                .end(function (err, res) {
                    res.should.have.status(200);
                    done();
                })
    });

    it('should update a single quote on /quotes/like POST');
    it('should delete a single quote on /quotes/delete POST');
});