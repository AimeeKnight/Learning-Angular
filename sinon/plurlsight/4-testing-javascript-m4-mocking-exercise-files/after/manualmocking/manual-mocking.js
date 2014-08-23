
var MyClass = function() {	
};

MyClass.prototype.Method1 = function() {
	console.log('inside method1');
	return true;
};

var MySubclass = function() {
};
MySubclass.prototype = new MyClass();

MySubclass.prototype.Method2 = function() {
	console.log('inside method4');
	return 'something';
};

function SpyOn(classToSpyOn) {
	for(var key in classToSpyOn) {
		classToSpyOn[key] = CreateSpyPassthrough(key, classToSpyOn, classToSpyOn[key]);
	}
};

function CreateSpyPassthrough(key, context, origfunc) {
	var passthroughSpy = function() {
		console.log('I am a passthrough spy for ' + key);
		return origfunc.apply(context, arguments);
	};
	return passthroughSpy;
};

var mysubclass = new MySubclass();
SpyOn(mysubclass);

mysubclass.Method1();
mysubclass.Method2();


