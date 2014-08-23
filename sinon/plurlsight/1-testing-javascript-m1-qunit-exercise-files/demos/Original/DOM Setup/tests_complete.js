module('DOM Tests', {
	setup: function() {
		$("body").append("<div id='div1'>some text</div>");
	},
	teardown: function() {
		$("#div1").remove();
	}
});

test('DOM test 1', function() {
	strictEqual(SUT.ReadDiv(), 'some text');
});

module('DOM Tests 2', {
	setup: function() {
		$("body").append("<div id='div1'>some different text</div>");
	},
	teardown: function() {
		$("#div1").remove();
	}
});

test('DOM test 2', function() {
	strictEqual(SUT.ReadDiv(), 'some different text');
});