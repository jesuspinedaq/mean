const chai = require('chai');
const chaiHttp = require('chai-http');
const Person = require('../models/Person');
const server = require('../../server');
const assert = require('chai').assert;

var should = chai.should();
chai.use(chaiHttp);

describe('Person test', function(){
  beforeEach(function(done){
    const person = getPerson();

    person.save(function(err){
      done();
    })
  });

  function getPerson(){
    const person = new Person({
      firstName: 'Jhon',
      lastName: 'Doe'
    });

    return person;
  }

  afterEach(function(done){
    Person.collection.drop();
    done();
  });

  it('Should list all peope on /api/person', function(done){
    chai.request(server)
    .get('/api/person')
    .end(function(err, res){
      assert.equal(res.status, 200);
      assert.lengthOf(res.body, 1);
      assert.equal(res.body[0].firstName, 'Jhon');
      assert.equal(res.body[0].lastName, 'Doe');
      done();
    });
  });

  it('Should show single person on /api/person/:id', function(done){
    Person.findOne({}, function(err, person){
      chai.request(server)
      .get('/api/person/' + person._id)
      .end(function(err, res){
        assert.equal(res.status, 200);
        assert.equal(res.body.firstName, 'Jhon');
        assert.equal(res.body.lastName, 'Doe');
        done();
      });
    });
  });

  it('Should add single person on /api/person', function(done){
    const person = getPerson();
    
    chai.request(server)
    .post('/api/person')
    .send({
      firstName: 'Jhon',
      lastName: 'Doe'
    })
    .end(function(err, res){
      console.log("err", err);
      console.log(res.body);
      assert.equal(200, res.status);
      done();
    });
  });

  it('Should update single person on /api/person/:id', function(){
    
  });

  it('Should delete single person on /api/person/:id', function(){

  });
});