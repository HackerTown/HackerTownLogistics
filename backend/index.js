var express = require('express');
var app = express();
var database = require('./database');
var bodyParser = require('body-parser');

var hackathons = require('./models/hackathons');


app.use(express.static('../public'));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.send('HackerTown');
});

// API
app.get('/api/hackathons/:hackathonId', function(req, res) {
	console.log(req.params);
	hackathons.getHackathonById(req.params.hackathonId, function(err,result){
		console.log(err);
		res.send(result);
	});
});

app.listen(3000, function(){
	console.log('HackerTown running at http://localhost:3000/');
});
