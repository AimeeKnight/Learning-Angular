function callMyCallback(cb) {
	cb();
}

describe("Spies", function() {
  
  it("should spy on a callback", function() {
	var spyCB = jasmine.createSpy('myspy');
	callMyCallback(spyCB);
	expect(spyCB).toHaveBeenCalled();
  });
  
});

