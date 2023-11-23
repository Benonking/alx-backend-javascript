const assert = require('assert')
const calculateNumber = require('./1-calcul');
const { type } = require('os');

describe("calcualateNumber", function(){
	it("shud return the sum of rounded numbers", function(){
		const type = 'SUM';
		assert.strictEqual(calculateNumber(type, 1.5, 2.6), 5);
		assert.strictEqual(calculateNumber(type, 1.5, 2.4), 4);
		assert.strictEqual(calculateNumber(type, -1.5, -2.6), -4);
	});
	it('shud return the division of rounded numbers', function(){
		const type = 'DIVIDE';
		assert.strictEqual(calculateNumber(type, 1.5, 1), 2);
		assert.strictEqual(calculateNumber(type, 1.5, 2.4), 1);
		assert.strictEqual(calculateNumber(type, -1.5, -2.6), 0.3333333333333333);
		assert.strictEqual(calculateNumber(type, 4, 0), 'Error');
	});
	it ('shud return the diffrence of two rounded numbers', function(){
		const type = 'SUBTRACT'
		assert.strictEqual(calculateNumber(type, 1.5, 2.6), -1);
		assert.strictEqual(calculateNumber(type, 1.5, 2.4), 0);
		assert.strictEqual(calculateNumber(type, -1.5, -2.6), 2);
	});
});