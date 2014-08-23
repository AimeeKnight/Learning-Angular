
describe("combat attack", function() {

	it('should damage the defender if the hit is successful', function() {
		var combat = new Combat();
		var defender = sinon.stub(new Character());
		
		var attacker = sinon.stub(new Character());
		attacker.damage = 5;
		attacker.calculateHit.returns(true);
		
		combat.attack(attacker, defender);
		
		expect(defender.takeDamage.called).toBe(true);
		expect(defender.takeDamage.getCall(0).calledWith(5)).toBe(true);
	});
	
	it('should damage the defender if the hit is successful - mock', function() {
		var combat = new Combat();
		var defender = new Character();
		var mockDefender = sinon.mock(defender);
		var expectation = mockDefender.expects("takeDamage").once().withArgs(5);
		
		var attacker = sinon.stub(new Character());
		attacker.damage = 5;
		attacker.calculateHit.returns(true);
		
		combat.attack(attacker, defender);
		
		expectation.verify();
	});
	
});

