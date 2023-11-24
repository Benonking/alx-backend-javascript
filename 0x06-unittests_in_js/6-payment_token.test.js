const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token'); 

const expect = chai.expect;

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with success message when success is true', (done) => {
    // Use chai-as-promised to check for resolved values
    const promise = getPaymentTokenFromAPI(true);
    promise.
		then((res) => {
			expect(res).to.deep.equal({ data: 'Successful response from the API' });
		})
		done();
  });
});