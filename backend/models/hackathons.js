var database = require("../database");

module.exports.createHackathons = function(name,shortname,description,url,starts_at,ends_at,callback){
	database.query("INSERT INTO hackathons SET ?",
		{name: name, shortname: shortname, description: description, url: url, starts_at: starts_at, ends_at: ends_at},
		callback);
};

module.exports.getHackathonById = function(id, callback) {
	database.query("SELECT * FROM hackathons WHERE id = " + (~~id), callback);
};
