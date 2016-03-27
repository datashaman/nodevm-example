var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('port', process.env.PORT || 8080);

app.get('/', function(request, response) {
	response.render('index', {
		message: 'Hello World!'
	});
});

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
	console.log('Node app is running at localhost:' + app.get('port'));
});
