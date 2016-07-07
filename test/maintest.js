/**
 * Created by danik-ik on 07.07.16.
 */
var assert = require('assert');

describe ('Самый главный тест', function () {
	it('should pass', function(done) {
		assert.deepEqual([], []);
		done();
	});
	it('should not pass', function(done) {
		assert.equal([], []);
		done();
	});
})
