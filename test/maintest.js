/**
 * Created by danik-ik on 07.07.16.
 */

describe ('Самый главный тест', function () {
	it('should pass', function(done) {
		done();
	});
	it('should not pass', function(done) {
		throw('don`t pass');
		done();
	});
})
