
describe("Calculator", function() {
  var calc;
  
  beforeEach(function() {
	calc = new Calculator();
	
	this.addMatchers({
		toBeBetween: function(a, b) {
			return this.actual >= a && this.actual <= b;
		}
	});
  });

  it("should be able to add 1 plus 1", function() {
    expect(calc.add(1, 1)).toBe(2);
  });
  
  it('should be able to divide 6 and 2', function() {
	expect(calc.divide(6, 2)).toBe(3);
  });
  
  it('should be able to divide a rational number', function() {
	expect(calc.divide(1, 3)).toBeBetween(0.3, 0.4);
  });

});

