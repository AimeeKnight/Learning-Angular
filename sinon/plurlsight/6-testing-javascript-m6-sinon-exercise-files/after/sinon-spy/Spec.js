
describe("Spies", function() {
  
	it('should spy on a callback', function() {
		var spy = sinon.spy();
		mySUT.callCallback(spy);
		expect(spy.called).toBe(true);
	});
	
	it('should call a real implementation if given a real function to spy on', function() {
		var spy = sinon.spy(realCallback);
		var returnValue = mySUT.callCallbackWithReturnValue(spy);
		expect(spy.called).toBe(true);
		expect(returnValue).toBe(4);
	});
	
	it('should spy on a method of an object', function() {
		var spy = sinon.spy(myDep, 'someMethod');
		var returnValue = mySUT.callDependencyBetter(myDep);
		expect(spy.called).toBe(true);
		expect(returnValue).toBe(10);
	});
  
});

