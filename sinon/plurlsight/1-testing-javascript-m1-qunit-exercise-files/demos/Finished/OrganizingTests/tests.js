module('module 1');

test('my first test', function() {
	ok(true);
});

module('module 2', {
	setup: function() {
	
	},
	teardown: function() {
	
	}
});

test('my second test', function() {
	ok(true);
});