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
  it('GET /cart/:id returns correct output',(done) => {
    const id = 12
    request.get(`${url}/cart/${id}`, (err, res, body) => {
      expect(body).to.be.equal(`Payment methods for cart ${id}`);
      done()
    });
  });
  it('POST /login returns correct status code',(done) => {
    request.post(`${url}/login`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      done()
    });
  });
  it('POST /login returns correct output',(done) => {
    request.post(`${url}/login`, (err, res, body) => {
      expect(body).to.be.equal(`Welcome ${body.userNane}`);
      done()
    });
  });
  it('POST /available_payments returns correct status code',(done) => {
    request.post(`${url}/login`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      done()
    });
  });
  it('GET /available_payments returns correct output',(done) => {
    request.get(`${url}/available_payments`, (err, res, body) => {
      expect(JSON.parse(body)).to.be.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done()
    });
  });
});
