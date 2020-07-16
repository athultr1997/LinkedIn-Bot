var http = require('http');
var fs = require('fs');
var url = require("url");

http.createServer(function(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received");

	response.statusCode = 200;

	if(pathname=="/" || pathname=="/index.html") {
		html = fs.readFileSync("index.html", "utf8");
		response.write(html);
	}
	else if(pathname=="/main.js") {
		script = fs.readFileSync("main.js", "utf8");
		response.write(script);
	}

	response.end();
}).listen(8000);

console.log("Server Started. Listening to port 8000 at localhost.");