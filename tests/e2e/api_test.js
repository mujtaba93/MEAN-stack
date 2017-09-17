var http = require('http');
var options = {
    host: 'localhost',
    port: 9000,
    path: '/api/books'
};

describe('MEAN Stack APP API test case', function () {
    it('should respond with proper status code', function () {
        http.get(options, function (resp) {
            console.log(options.path + ' responded with status code : ' + resp.statusCode);
            expect(resp.statusCode).toBe(200);
        }).on("error", function (e) {
            console.log("Got error: " + e.message);
        });
    });
});
