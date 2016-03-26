var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.send('Hello World!');
});

app.listen(8080, function() {
	console.log('Node app is running at localhost:8080');
});
