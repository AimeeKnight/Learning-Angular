module('DOM Tests', {
	setup: function() {
	},
	teardown: function() {
	}
});

test('CreateTodoItem creates 1 element', function() {
	SUT.CreateTodoItem();
	strictEqual($(".js-todoContainer").length, 1);
});



/// Inside Tests.html
<div id="qunit-fixture"><div id='div1' /></div>


/// inside mycode.js
$("#div1").append("<div class='js-todoContainer'>other html content</div>");