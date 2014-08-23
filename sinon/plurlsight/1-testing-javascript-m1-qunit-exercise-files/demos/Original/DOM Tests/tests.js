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
