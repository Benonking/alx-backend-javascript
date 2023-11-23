const assert = require('assert')
const calculateNumber = require('./1-calcul');
const chai = require('chai');
expect = chai.expect;

describe("calcualateNumber", function(){
	it("shud return the sum of rounded numbers", function(){
		const type = 'SUM';
		expect(calculateNumber(type, 1.5, 2.6)).to.equal(5)
		expect(calculateNumber(type, 1.5, 2.4)).to.equal(4);
		expect(calculateNumber(type, -1.5, -2.6)).to.equal(-4);
	});
	it('shud return the division of rounded numbers', function(){
		const type = 'DIVIDE';
		expect(calculateNumber(type, 1.5, 1)).to.equal(2);
		expect(calculateNumber(type, 1.5, 2.4)).to.equal(1);
		expect(calculateNumber(type, -1.5, -2.6)).to.equal(0.3333333333333333);
		expect(calculateNumber(type, 4, 0)).to.equal('Error');
	});
	it ('shud return the diffrence of two rounded numbers', function(){
		const type = 'SUBTRACT'
		expect(calculateNumber(type, 1.5, 2.6)).equal(-1);
		expect(calculateNumber(type, 1.5, 2.4)).equal(0);
		expect(calculateNumber(type, -1.5, -2.6)).equal(2);
	});
});