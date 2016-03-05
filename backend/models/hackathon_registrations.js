var database = require("../database");

module.exports.registerhacker = function(hackathon_id,name,school,phone_number,student_email,preffered_email,gender,resume_id,age,ethnicity,location,school_year,major,hackathon_attendance_count){
	database.query("INSERT INTO hackathons('hackathon_id','name','school','phone_number','student_email','preffered_email','gender','resume_id','age','ethnicity','location','school_year','major','hackathon_attendance_count) VALUES("+ database.escape(hackathon_id)+ ","+ database.escape(name)+ ","+ database.escape(school)+ ","+ database.escape(url)+ ","+ database.escape(starts_at)+ ","+ database.escape(ends_at)+ ")", callback);
};