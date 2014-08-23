
describe("Calculator", function() {

  var calc;
  
  describe('FX Tests', function() {
	var el;
	
	beforeEach(function() {
		el = $("<div>some content</div>");
		$("#container").append(el);
		calc = new Calculator(el);
	});
	
	afterEach(function() {
		el.remove();
	});
	
	it('should work with a visul effect', function() {
		var flag = false;
		var callback = function() {
			flag = true;
		}
		
		runs(function() {
			calc.hideResult(callback);
		});
		
		waitsFor(function() {
			return flag;
		}, "flag to be true", 1100);
		
		runs(function() {
			expect(el.css("display")).toBe("none");
		});
	
	});
	
  });
  
  describe('pause before hiding', function() {
	it('should call my callback function after two seconds', function() {
		var calc = new Calculator();
		var flag = false;
		
		var callback = function() {
			flag = true;
		};
		
		runs(function() {
			calc.pauseBeforeHiding(callback);
			expect(flag).toBeFalsy();
		});
		
		waitsFor(function() {
			return flag;
		}, 'pauseBeforeHiding to return', 2100);
		
		runs(function() {
			expect(flag).toBeTruthy();
		});
	});
  });
  
  describe('mock clock', function() {
	beforeEach(function() {
		jasmine.Clock.useMock();
	});
	
	it('should call my callback function after two seconds - mock clock', function() {
		var calc = new Calculator();
		var callbackCalled = false;
		
		var callback = function() {
			callbackCalled = true;
		};
		
		calc.pauseBeforeHiding(callback);
		jasmine.Clock.tick(1990);
		expect(callbackCalled).toBeFalsy();
		jasmine.Clock.tick(100);
		expect(callbackCalled).toBeTruthy();
	});
  });
});
