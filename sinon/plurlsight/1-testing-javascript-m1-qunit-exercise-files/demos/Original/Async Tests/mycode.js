
var SUT = {}

SUT.fadeOutDiv = function(duration, callback) {
	$("#div1").fadeOut(duration, callback);
}

SUT.BusinessCall1 = function() {
	$.ajax({
	  url: '/saveData',
	  data: {name: 'some data'},
	  success: function(data) {
		console.log('Load was performed.');
	  }
	});
};
