var database = require("../database");

module.exports.createUser = function(username, email) {
	database.query("INSERT INTO users ('username', 'email') VALUES (" + database.escape(username) + "," + database.escape(email) + ")", callback);
};

module.exports.getUserById = function(id, callback) {
	database.query("SELECT * FROM users WHERE id = " + (~~id), callback);
};

