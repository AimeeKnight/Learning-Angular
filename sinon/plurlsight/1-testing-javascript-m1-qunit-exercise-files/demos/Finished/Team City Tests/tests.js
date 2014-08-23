module('Team City Tests', {
	setup: function() {
	},
	teardown: function() {
	}
});

test('Passing Test', function() {
	SUT.DoSomething();
	strictEqual(1, 1);
});

test('Failing Test', function() {
	SUT.DoSomething();
	strictEqual(2, 2);
});
