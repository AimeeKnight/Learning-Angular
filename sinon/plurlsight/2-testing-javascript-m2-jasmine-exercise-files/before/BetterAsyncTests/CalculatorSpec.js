
describe("Calculator", function() {
	var calc, el;
	
	beforeEach(function() {
		el = $("<div>some content</div>");
		$("#container").append(el);
		calc = new Calculator(el);
	});
	
	afterEach(function() {
		el.remove();
	});

});
