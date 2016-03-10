var database = require("../database");

module.exports.registerhacker = function(hackathon_id, name, school, phone_number, student_email, preffered_email, gender, resume_id, age, ethnicity, location, school_year, major, hackathon_attendance_count, callback){
	database.query("INSERT INTO hackathon_registration SET ?", {hackathon_id: hackathon_id, name: name, school: school, phone_number: phone_number, student_email: student_email, preffered_email: preffered_email, gender: gender, resume_id: resume_id, age: age, ethnicity: ethnicity, location: location, school_year: school_year, major: major, hackathon_attendance_count: hackathon_attendance_count}, callback);

};