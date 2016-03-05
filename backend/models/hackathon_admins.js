var database = require("../database");

module.exports.createHackathonAdmin = function(user_id, hackathon_id){
	database.query("INSERT INTO hackathon_admins ('user_id','hackathon_id') VALUES("+ database.escape(user_id)+ ","+ database.escape(hackathon_id)+ ")", callback);
};
