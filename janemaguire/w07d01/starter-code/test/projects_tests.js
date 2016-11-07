process.env.NODE_ENV = 'test';

const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const Project = require('../models/project');

// Projects Index
describe("GET /projects", () => {

  before(done => {
    Project.collection.drop();
    Project.create({
      title: 'Excellente',
      github: 'http://github.com/excellente',
      url: 'http://excellente.herokuapp.com',
      users: ["5820b539ea481a8708720eae"]
    }, done);
  });

  it("should return a 200 response", (done) => {
    api.get('/projects')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it("should return an array", (done) => {

    api.get('/projects')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });

});
