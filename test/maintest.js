/**
 * Created by danik-ik on 07.07.16.
 */
var assert = require('assert');
var ob = require('../obfuscator');

var testData1 = ["class1","class2"];
var testData2 = ["class1","class2","class2"];

describe ('Самый главный тест', function () {

	it('Проверка основного функционала', function(done) {
		assert.deepEqual(ob(testData1), {class1: '1',class2: '1'});
		assert.deepEqual(ob(testData2), {class1: '1',class2: '2'});
		done();
	});
})
