const chai = require('chai');
const request = require('request');
const expect = chai.expect

describe('api integration test', ()=>{
	const url = 'http://localhost:7865';
	it('GET / returns correct status code', (done) => {
    request.get(`${url}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });
	it('GET / returns correct response', (done) => {
    request.get(`${url}/`, (_err, res, body) => {
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
  it('GET /cart/:id returns correct status code when id is a number',(done) => {
    request.get(`${url}/cart/12`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      done()
    });
  });
  it('GET /cart/:id returns correct status code when id is not a number',(done) => {
    request.get(`${url}/cart/abc`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done()
    });
  });
});
