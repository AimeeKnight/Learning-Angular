module('Asynchronous Tests');

QUnit.config.testTimeout = 1000;

test('broken asynchronous timing test', function() {
	setTimeout(function() {
		ok(true);
	}, 100);
});

test('asynchronous timing test 1', function() {
	stop();
	setTimeout(function() {
		ok(true);
		start();
	}, 100);
	console.log(QUnit.config);
});

test('asynchronous timing test 2', function() {
	stop();
	stop();
	setTimeout(function() {
		ok(true);
		start();
	}, 100);
	setTimeout(function() {
		ok(true);
		start();
	}, 100);
});

test('asynchronous timing test 2', function() {
	stop(2);
	setTimeout(function() {
		ok(true);
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
	
	SUT.fadeOutDiv(500);
	
	setTimeout(function() {
		ok(!$("#div1").is(":visible"));
		start();
	}, 600);
});

asyncTest('asynchronous UI test', function() {
	var div1 = $("#div1");
	ok(div1.is(':visible'));
	
	SUT.fadeOutDiv(500, function() {
		ok(!div1.is(':visible'));
		start();
	});
});

/********************************/

SUT.BusinessCall1 = function() {
	$.ajax({
	  url: '/saveData',
	  data: {name: 'some data'},
	  success: function(data) {
		console.log('Load was performed.');
	  }
	});
};



