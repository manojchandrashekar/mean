/**
 * A simple web server using Node.
 */

var http = require('http');

var server = http.createServer(function(req, res) {
	//Don't honour the request for a favicon. This isn't a full-fledged server.
	if (req.url === '/favicon.ico') {
		return res.end();
	}

	//We've received a request from the client.
	console.log('Incoming request to ' + req.url);

	//Set the MIME type for the response.
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});

	//Delay the response by 5 seconds - Just mimicking some time taken by the server processes.
	setTimeout(function() {
		//Send the response
		console.log('Sending response for ' + req.url);
		res.end('This is the final response.');
	}, 5000);

});

server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');