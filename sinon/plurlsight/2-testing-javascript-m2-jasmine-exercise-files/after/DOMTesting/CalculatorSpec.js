describe("Calculator", function() {
  var calc;
  var OutputId = "#calc-fixture";
  
  beforeEach(function() {
	$("body").append($("#template-wrapper").html().replace('-template', ''));
	calc = new Calculator($(OutputId));
  });
  
  afterEach(function() {
	$("#calc-fixture").remove();
  });

  it("should be able to add 1 plus 1", function() {
	calc.add(1, 1);
	expect($(OutputId).text()).toBe('2');
  });

  it("should be able to divide 3 into 12", function() {
	calc.divide(12, 3);
	expect($(OutputId).text()).toBe('4');
  });

});
