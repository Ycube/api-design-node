var app = require('./server');
var request = require('supertest');
var chai = require('chai').expect;

// TODO: make tests for the other CRUD routes
// DELETE, UPDATE, PUT, GET ONE
// to run the test type mocha server/specs.js

describe('[LIONS]', function(){

  it('should get all lions', function(done) {
    request(app)
      .get('/lions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        chai(resp.body).to.be.an('array');
        done();
      })
  });

  it('should create a lion', (done) => {
    var lion = {
      name: 'Simba',
      age: 1,
      pride: 'Circle',
      gender: 'male'
    };
    request(app)
      .post('/lions')
      .send()
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        var simba = res.body;
        chai(simba).to.be.an('object');
        // chai(simba).to.eql(lion);
        done();
      })
  });

  it('should delete a lion', (done) => {
    var testLion = {
      name: 'test lion',
      age : 15,
      pride: 'test',
      gender: 'male'
    };
    request(app)
      .post('/lions')
      .send(testLion)
      .set('Accept', 'application/json')
      .end((err,res) => {
        var deletedLion = res.body;
        request(app)
          .delete('/lions/' + deletedLion.id)
          .end((err, res) => {
            chai(res.body).to.eql(deletedLion);
            done();
          })
      })
  });

  it('should update a lion', (done) => {
    var testLion = {
      name: 'test lion',
      age : 25,
      pride: 'test',
      gender: 'female'
    };
    request(app)
      .post('/lions')
      .send(testLion)
      .set('Accept', 'application/json')
      .end((err, res) => {
        var updatedLion = res.body
        request(app)
          .put('/lions/' + updatedLion.id)
          .send({
            name : 'new name'
          })
          .end((err,res) =>   {
            chai(res.body.name).to.equal('new name');
            done();
          })
      })
  });

  it('should read a single lion', (done) => {
    var testLion = {
      name: 'greeter lion',
      age : 25,
      pride: 'test',
      gender: 'female'
    };
    request(app)
      .post('/lions')
      .send(testLion)
      .set('Accept', 'application/json')
      .end((err,res) => {
        var readLion = res.body;
        request(app)
          .get('/lions/' + readLion.id)
          .expect(200)
          .end((err,res) => {
            chai(res.body).to.eql(readLion);
            done();
          })
      });
  });
});


