var mySUT = {
	callCallback: function(cb) {
		cb();
	},
	
	callCallbackWithReturnValue: function(cb) {
		return cb();
	},
	
	callDependency: function() {
		return myDep.someMethod();
	},
	
	callDependencyBetter: function(dep) {
		return dep.someMethod();
	}
}

var myDep = {
	someMethod: function() {
		return 10;
	}
}

function realCallback() {
	return 4;
}
