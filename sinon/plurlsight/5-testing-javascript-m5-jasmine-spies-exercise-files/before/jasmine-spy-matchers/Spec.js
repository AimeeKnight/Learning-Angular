
describe("Spies", function() {


	it("should verify arguments", function() {
		var spy = jasmine.createSpy('mySpy');
		spy(1);
		spy(1, 1);
		spy(3);
		spy(2);
		expect(spy).toHaveBeenCalledWith(1);
	});

	it("should verify arguments that weren't called", function() {
		var spy = jasmine.createSpy('mySpy');
		spy(1);
		spy(1);
		spy(2);
		expect(spy).not.toHaveBeenCalledWith(4);
	});

	it("should verify arguments that weren't called", function() {
		var myObj = {method: function() {}}
		var spy = spyOn(myObj, "method");
		myObj.method(1);
		myObj.method(2);
		myObj.method(3);
		
		expect(spy.calls[0].args[0]).toEqual(1);
		expect(spy.calls[0].object).toEqual(myObj);
		expect(spy.calls.length).toEqual(3);
		expect(spy.callCount).toEqual(3);
		expect(spy.mostRecentCall.args[0]).toEqual(3);
		expect(spy.argsForCall[1][0]).toEqual(2);
	});

	it('should work with utility methods', function() {
		var spy = jasmine.createSpy('a spy');
		expect(jasmine.isSpy(spy)).toEqual(true);
		spy();
		spy.reset();
		expect(spy.callCount).toEqual(0);
	})
	

});

