const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with stub', () => {
    // Create a spy on Utils.calculateNumber
    const stub = sinon.stub(Utils, 'calculateNumber');
		const consoleSpy = sinon.spy(console, 'log');
		stub.returns(10)
    // Call the function that uses Utils.calculateNumber
    const res = sendPaymentRequestToApi(100, 20);

    // Verify that Utils.calculateNumber was called with the correct arguments
    expect(consoleSpy.calledWithExactly('The total is: 10')).to.equal(true)
		expect(consoleSpy.calledOnce).to.be.true;
		expect(stub.withArgs('SUM', 100, 20).calledOnce).to.be.true;
		expect(stub.calledWith('SUM', 100, 20)).to.be.true;
		expect(console.log(`The total is: ${Utils.calculateNumber('SUM', 100, 20)}`)).to.equal(res);
    // Restore the original function after testing
    stub.restore();
		consoleSpy.restore();
  });
});
