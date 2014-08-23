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
	
	async.it('should make the result invisible', function(done) {
		var callback = function() {
			expect(el.css('display')).toBe('none');
			done();
		};
		
		calc.hideResult(callback);
	});