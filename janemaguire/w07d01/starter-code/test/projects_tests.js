process.env.NODE_ENV = 'test';

const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const Project = require('../models/project');


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

  describe("GET /projects/:id", () => {

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

    it("should return an object", (done) => {
      api.get('/projects')
        .set('Accept', 'applications/json')
        .end((err, res) => {
          expect(res.body[0]).to.have.property('title');
          expect(res.body[0]).to.have.property('github');
          expect(res.body[0]).to.have.property('url');
          expect(res.body[0]).to.have.property('users');
          done();
        });
    });
  });
});

describe("POST /projects", () => {

  it('should return a 201 response', (done) => {
    api.post('/projects')
      .set('Accept', 'application/json')
      .send({
        title: 'Excellente',
        github: 'http://github.com/excellente',
        url: 'http://excellente.herokuapp.com',
        users: ["5820b539ea481a8708720eae"]
      })
      .expect(201, done);
    });

    it('should return an object', (done) => {
      api.post('/projects')
        .set('Accept', 'application/json')
        .send({
          title: 'Excellente',
          github: 'http://github.com/excellente',
          url: 'http://excellente.herokuapp.com',
          users: ["5820b539ea481a8708720eae"]
        })
        .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
    });
});

describe("PUT /projects/:id", () => {

  let projectId = null;

  beforeEach(done => {
    Project.collection.drop();
    Project.create({
      title: 'Excellente',
      github: 'http://github.com/excellente',
      url: 'http://excellente.herokuapp.com',
      users: ["5820b539ea481a8708720eae"]
    },(err, project) => {
      projectId = project._id;
      done();
    });
  });

  it("should return a 200 response", (done) => {
    api.put(`/projects/${projectId}`)
      .set('Accept', 'application/json')
      .send({
        title: 'Fabulouso',
        github: 'http://github.com/fabulouso',
        url: 'http://fabulouso.herokuapp.com',
        users: ["5820b539ea481a8708720ead"]
      })
      .expect(200, done);
  });

  it("should return an object", (done) => {
    api.put(`/projects/${projectId}`)
      .set('Accept', 'application/json')
      .send({
        title: 'Fabulouso',
        github: 'http://github.com/fabulouso',
        url: 'http://fabulouso.herokuapp.com',
        users: ["5820b539ea481a8708720ead"]
      })
      .end((err, res) => {
          expect(res.body).to.be.an('object');
          done();
        });
    });
});
