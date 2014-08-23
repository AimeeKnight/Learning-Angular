
describe('Outer Describe', function() {
	
	before(function() {
		console.log('before');
	});
	
	after(function() {
		console.log('after');
	});
	
	beforeEach(function() {
		console.log('beforeEach');
	});
	
	afterEach(function() {
		console.log('afterEach');
	});

    it('should be my first test', function() {
        console.log('first');
        expect(1).to.equal(1);
    });
	
	
});