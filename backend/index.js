var express = require('express');
var app = express();
var database = require('./database');

app.use(express.static('../public'));

app.get('/', function(req, res){
	res.send('HackerTown');
});

// API
app.get('/api/hackathons/:hackathonId', function(req, res) {
	console.log(req.params);
	res.send('k');
});

app.listen(3000, function(){
	console.log('HackerTown running at http://localhost:3000/');
});
