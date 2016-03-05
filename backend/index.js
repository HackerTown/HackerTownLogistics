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

app.post('/api/hackathons', function(req,res){
	console.log(req.body);
	hackathons.createHackathons(req.body.name, req.body.shortname, req.body.description, req.body.url, req.body.starts_at, req.body.ends_at), function(err,req){
		res.send("okay");
	}
		;
});

app.listen(3000, function(){
	console.log('HackerTown running at http://localhost:3000/');
});
