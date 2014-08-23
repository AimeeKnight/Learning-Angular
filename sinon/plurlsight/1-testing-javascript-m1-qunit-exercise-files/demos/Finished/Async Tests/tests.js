module('Asynchronous Tests');

test('asynchronous timing test', function() {
	stop();
	setTimeout(function() {
		ok(true);
		start();
	}, 100);
});

test('asynchronous timing test 2', function() {
	stop(2);
	setTimeout(function() {
		ok(true);
		console.log('longer timout finished');
		start();
	}, 100);
	setTimeout(function() {
		ok(true);
		start();
	}, 100);
});

asyncTest('better asynchronous timing test', function() {
	setTimeout(function() {
		ok(true);
		start();
	}, 100);
});

asyncTest('UI asynchronous timing test', function() {
	SUT.fadeOutDiv(500, function() {
		ok(!$("#div1").is(":visible"));
		start();
	});
});


