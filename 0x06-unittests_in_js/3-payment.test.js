const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    // Create a spy on Utils.calculateNumber
    const spy = sinon.spy(Utils, 'calculateNumber');
		const consoleSpy = sinon.spy(console, 'log');
    // Call the function that uses Utils.calculateNumber
    const res = sendPaymentRequestToApi(100, 20);

    // Verify that Utils.calculateNumber was called with the correct arguments
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.equal(true)
		expect(consoleSpy.calledOnce).to.be.true;
		expect(spy.withArgs('SUM', 100, 20).calledOnce).to.be.true;
		expect(spy.calledWith('SUM', 100, 20)).to.be.true;
		expect(console.log(`The total is: ${Utils.calculateNumber('SUM', 100, 20)}`)).to.equal(res);
    // Restore the original function after testing
    spy.restore();
		consoleSpy.restore();
  });
});
