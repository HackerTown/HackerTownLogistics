var database = require("../database");

module.exports.createHackathons = function(name,shortname,description,url,starts_at,ends_at){
	database.query("INSERT INTO hackathons('name','shortname','description','url','starts_at','ends_at') VALUES("+ database.escape(name)+ ","+ database.escape(shortname)+ ","+ database.escape(description)+ ","+ database.escape(url)+ ","+ database.escape(starts_at)+ ","+ database.escape(ends_at)+ ")", callback);
};