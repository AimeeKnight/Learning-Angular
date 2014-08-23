module('Team City Tests', {
	setup: function() {
	},
	teardown: function() {
	}
});

test('Passing Test', function() {
	SUT.DoSomething();
	strictEqual(1, 3);
});

test('Failing Test', function() {
	SUT.DoSomething();
	strictEqual(1, 2);
});
