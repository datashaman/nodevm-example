var gulp = require('gulp'),
	g = require('gulp-load-plugins')();

gulp.task('default', function() {
	return gulp.src([
		'bower_components/jquery/dist/jquery.js'
	])
	.pipe(g.concat('site.js'))
	.pipe(gulp.dest('public/scripts'));
});
