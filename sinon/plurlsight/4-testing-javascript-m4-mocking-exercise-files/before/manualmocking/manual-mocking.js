
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


