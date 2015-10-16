var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require('mongoose');

var server = require('../server/app');

var should = chai.should();
chai.use(chaiHttp);



it('should return a 200 response', function(done) {
  chai.request(server)
  .get('/')
  .end(function(res) {
    res.should.have.status(200);
    done();
  });
});