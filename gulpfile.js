var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function(){
	//not sure what goes here or what I am doing
	return gulp.src("src/app.js")
		.pipe(babel())
		.pipe(gulp.dest("dist"));
});