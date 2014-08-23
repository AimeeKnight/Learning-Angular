module('DOM Tests');

QUnit.log = function(args) {
	console.log("passed an assert: " + args.result);
};

QUnit.testStart = function(args) {
	console.log('started test ' + args.name);
}

QUnit.testDone = function(args) {
	console.log('finished test ' + args.name);
}

QUnit.moduleStart = function(args) {
	console.log('started module ' + args.name);
}

QUnit.moduleDone = function(args) {
	console.log('module done ' + args.name);
}

QUnit.begin = function() {
	console.log('started tests');
}

QUnit.done = function(args) {
	console.log('finished all tests.  tests passed: ' + args.passed + "/" + args.total);
}

test('introduce global variable', function() {
	globalvar = 3;
	strictEqual(3, globalvar);
});
/*
test('hidden exception', function() {
	SUT.doSomething();
});

test('expect some asserts', function() {
	expect(3);
	
	ok(true);
	ok(true);
	ok(true);
});

test('expect some asserts', 3, function() {
	ok(true);
	ok(true);
	ok(true);
});
*/

