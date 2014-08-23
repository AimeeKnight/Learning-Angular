
var Calculator = function(element) {
	this.el = element
};

Calculator.prototype.add = function(a, b) {
	$(this.el).html(a + b);
};

Calculator.prototype.divide = function(a, b) {
	$(this.el).html(a / b);
};

