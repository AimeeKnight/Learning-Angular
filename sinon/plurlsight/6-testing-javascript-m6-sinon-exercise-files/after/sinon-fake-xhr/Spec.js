describe("useFakeXMLHttpRequest", function() {
	var xhr, requests;
	beforeEach(function() {
		xhr = sinon.useFakeXMLHttpRequest();
		requests = [];
		
		xhr.onCreate = function(request) {
			requests.push(request);
		};
	});
	
	afterEach(function() {
		xhr.restore();
	});
	
	it('should be able to handle responses', function() {
		var responseData = '{"myData":3}';
		$.getJSON('some/url', function(data) { console.log(data); });
		requests[0].respond(200, {"Content-Type":"application/json"}, responseData);
		expect(requests[0].url).toBe('some/url');
	});
});

describe('fakeServer', function() {
	var server;
	beforeEach(function() {
		server = sinon.fakeServer.create();
		server.respondWith([200, {"Content-Type":"application/json"}, '{"myProp":35}']);
	});
	
	afterEach(function() {
		server.restore();
	});
	
	it('should respond with data', function() {
		var spy = sinon.spy();
		$.getJSON('some/url', spy);
		server.respond();
		sinon.assert.calledWith(spy, {myProp:35});
	});
});

