describe("sandbox", function() {


	it('should pass', function() {
		var b = {a:3,};
		expect(myObj.method1()).toBe(4); 
	}); 
	
	it('should not do anything else', function() {
		expect(2).toBe(2);
	});
	
});
