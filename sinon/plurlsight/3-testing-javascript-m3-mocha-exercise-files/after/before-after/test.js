describe('hi there', function() {

	before(function() {
		console.log('before');
	});
	after(function() {
		console.log('after');
	});
	beforeEach(function() {
		console.log('before each');
	});
	afterEach(function() {
		console.log('after each');
	});

	it('test 1', function() {
		expect(3).to.equal(3);
		console.log('test 1');
	}); 
	
	it('test 2', function() {
		expect(3).to.equal(3);
		console.log('test 2');
	});
});
