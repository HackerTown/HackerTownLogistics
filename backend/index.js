var express = require('express');
var app = express();
var database = require('./database');

app.get('/', function(req, res){
	res.send('HackerTown');
});

app.listen(3000, function(){
	console.log('HackerTown running at http://localhost:3000/');
})