var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../bin/www');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);
        
describe('Quotes', function() {
    it('should get index page on / GET',  function(done) {
        chai.request(server)
                .get('/')
                .end(function(err, res) {
                    res.should.have.status(200);
                    done();
        });
    });
    
    it('should list all quotes on /quotes GET');
    it('should add a single quote on /addquote POST');
    it('should update a single quote on /quotes/like POST');
    it('should delete a single quote on /quotes/delete POST');
});