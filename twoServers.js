// NPM package that qill handle any http requests
var http = require("http");

var PORT1 = 7000; // where the server is listening for requests from
var PORT2 = 7500;

// function that takes the request and outputs a response
function handleGood(request, response) {
	console.log(request);
	response.end("This handles the good " + request.url);
}

function handleBad(request, response) {
	console.log(request);
	response.end("This handles the bad " + request.url);
}
// creates a server
var good = http.createServer(handleGood);

good.listen(PORT1, function() {
	console.log("This is PORT1 ");
});
var bad = http.createServer(handleBad);
bad.listen(PORT2, function() {
	console.log("This is PORT2");
});