
describe('Outer Describe', function() {
	//mocha.setup({globals: ['i']});
	//mocha.setup({ignoreLeaks: true});
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
		i = 5;
        console.log('first');
        expect(1).to.equal(1);
    });
	
	describe('inner describe', function() {
	
		beforeEach(function() {
			console.log('beforeEach');
		});		
		
		afterEach(function() {
			console.log('afterEach');
		});
		
        it('should be my second test', function() {
            console.log('second');
            expect(1).to.equal(1);
        });
		
		it('should be a pending test');
		
	});

});