/**
 * Created by danik-ik on 07.07.16.
 */
var assert = require('assert');
var ob = require('../obfuscator');

describe ('Самый главный тест', function () {
	it('Проверка заглушки', function(done) {
		assert.deepEqual(ob(), {class1: 'a',class2: 'b'});
		done();
	});
})
