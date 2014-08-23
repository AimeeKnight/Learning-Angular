//mocha.setup({timeout:3000});
describe('Outer Describe', function() {
	
	it('should be asynchronous', function(done) {
		//this.timeout(3000);
        setTimeout(function() {
			console.log('async code');
			expect(1).to.equal(1);
			done();
        }, 2500);
    });

});