var myObj = {
	save: function() {
		//...
	},
	getQuantity: function() {
		return 5;
	}
}

describe("Spies", function() {

	it('should spy on save', function() {
		var spy = spyOn(myObj, 'save');
		myObj.save();
		expect(spy).toHaveBeenCalled();
	});
	
	it('should spy on getQuantity', function() {
		var spy = spyOn(myObj, 'getQuantity').andReturn(10);
		expect(myObj.getQuantity()).toEqual(10);
	});
	
	it('should spy on getQuantity fake', function() {
		var spy = spyOn(myObj, 'getQuantity').andCallFake(function() {
			console.log('returning 20');
			return 20;
		});
		expect(myObj.getQuantity()).toEqual(20);
	});
	
	it('should spy on getQuantity callthru', function() {
		var spy = spyOn(myObj, 'getQuantity').andCallThrough();
		expect(myObj.getQuantity()).toEqual(5);
		expect(spy).toHaveBeenCalled();
	});
	
	it('should spy on getQuantity throw', function() {
		var spy = spyOn(myObj, 'getQuantity').andThrow(new Error('problem'));
		var qty;
		try {
			qty = myObj.getQuantity();
		} catch(ex) {
			qty = 100;
		}
		expect(qty).toEqual(100);
	});
	

});

