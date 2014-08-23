test('DOM test', function() {
	strictEqual($("#mytestdiv").length, 1);
	strictEqual($("#mytestdiv").text(), 'some content');
	strictEqual($("#mytestdiv.testclass").length, 1);
	strictEqual($("#mytestdiv span").text(), 'some more content');
});