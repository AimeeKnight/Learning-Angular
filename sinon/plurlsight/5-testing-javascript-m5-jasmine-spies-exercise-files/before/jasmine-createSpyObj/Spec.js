
describe("Spies", function() {


	it("should create a spy object", function() {
		var spy = jasmine.createSpyObj('mySpy', ['getName', 'save']);
		spy.getName.andReturn("bob");
		spy.save.andCallFake(function() { console.log('save called');});

		expect(spy.getName()).toEqual("bob");
		spy.save();
		expect(spy.save).toHaveBeenCalled();
	});

	
	

});

