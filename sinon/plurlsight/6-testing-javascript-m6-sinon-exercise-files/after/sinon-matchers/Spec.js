
describe("matchers", function() {

	it('should work with matchers', function() {
		var spy = sinon.spy();
		
		spy('1234');
		spy.calledWithMatch(sinon.match('1'));
		
		var o = {myProp:1}
		spy(o);
		spy.calledWithMatch(sinon.match.same(o));
		
		spy({myProp:42, myProp2: 35});
		spy.calledWithMatch(sinon.match.has("myProp", 42));
	});
	
});

