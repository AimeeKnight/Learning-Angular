
var Calculator = function(displayElement) {
	this.$el = $(displayElement);
};

Calculator.prototype.hideResult = function(cb) {
	this.$el.fadeOut(1000, cb);
};

Calculator.prototype.pauseBeforeHiding = function(cb) {
	setTimeout(cb, 2000);
};


