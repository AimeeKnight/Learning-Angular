
describe("Spies", function() {

  it("should use a built-in assert", function() {
    var spy = sinon.spy();
    expect(spy.called).toBe(true);
  });
    
  it("should use a sinon assert", function() {
    var spy = sinon.spy();
	sinon.assert.called(spy);
  });

});

