
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
	
	
	
});

