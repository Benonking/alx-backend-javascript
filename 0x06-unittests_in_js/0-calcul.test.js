const assert = require('assert')
const calculateNumber = require('./0-calcul')

describe("calcualateNumber", function(){
	it("shud return the sun of rounded numbers", function(){
		assert.strictEqual(calculateNumber(1.5,2.6), 5);
		assert.strictEqual(calculateNumber(1.5, 2.4), 4);
		assert.strictEqual(calculateNumber(-1.5, -2.6), -4);
	});
});