var myClass = {
	doTimeout: function(cb) {
		setTimeout(cb, 1000);
	}, 
	hide: function() { 
		$("#hideMe").fadeOut();
	}
}

describe("timers", function() {
	var spy;
	var cb = function() {
		console.log('cb called');
	};

	beforeEach(function() {
		$("#hideMe").show();
		spy = sinon.spy(cb);
	});

	
	
});

