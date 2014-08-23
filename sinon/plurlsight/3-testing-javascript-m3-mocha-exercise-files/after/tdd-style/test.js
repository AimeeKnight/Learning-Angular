
suite('My Suite', function() {

	before(function() {
		console.log('before');
	});
	
	after(function() {
		console.log('after');
	});
	
	setup(function() {
		console.log('setup');
	});
	
	teardown(function() {
		console.log('teardown');
	});
	
	test('this is my first test', function() {
		console.log('first');
		expect(1).to.equal(1);
	});
	
	suite('inner suite', function() {
		setup(function() {
			console.log('inner setup');
		});		
		
		teardown(function() {
			console.log('inner teardown');
		});
		test('this is my second test', function() {
			console.log('second');
			expect(1).to.equal(1);
		});
		
	});

});