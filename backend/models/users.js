var database = require("../database");

module.exports.createUser = function(username, email, name, password, school) {
	database.query("INSERT INTO users SET ?", {username: username, email: email, name: name:, password: password, school: school}, callback);
};

module.exports.getUserById = function(id, callback) {
	database.query("SELECT * FROM users WHERE id = " + (~~id), callback);
};

