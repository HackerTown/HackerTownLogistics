var database = require("../database");

module.exports.createHackathonAdmin = function(user_id, hackathon_id){
	database.query("INSERT INTO hackathon_admins SET ?",{user_id: user_id, hackathon_id: hackathon_id}, callback);
};
