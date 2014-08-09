var assert = require('assert');
var expect = require('chai').expect;
var sinon = require('sinon');
var Cow = require('../app/cow');

describe("Cow", function() {
  var sandbox;

  beforeEach(function() {
    // create a sandbox
    sandbox = sinon.sandbox.create();

    // stub some console methods
    sandbox.stub(global.console, "log");
    sandbox.stub(global.console, "error");
  });

  afterEach(function() {
    // restore the environment as it was before
    sandbox.restore();
  });

  // ...

  describe("#greets", function() {
    it("should log an error if no target is passed in", function() {
      (new Cow()).greets();

      sinon.assert.notCalled(console.log);
      sinon.assert.calledOnce(console.error);
      sinon.assert.calledWithExactly(console.error, "missing target")
    });

    it("should log greetings", function() {
      var greetings = (new Cow("Kate")).greets("Baby");

      sinon.assert.notCalled(console.error);
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, "Kate greets Baby")
    });
  });
});
