var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	browserify = require('gulp-browserify');
	
gulp.task('beautify', function() {
	return gulp.src(['./src/styler.js'])
		// .pipe(browserify({}))
		.pipe(concat('styler.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('uglify', function() {
	return gulp.src([
			'./src/styler.js'
		])
		// .pipe(browserify({}))
		.pipe(concat('styler.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['beautify', 'uglify']);

// Watch
gulp.task('watch', function() {
	gulp.watch('./src/**/*.js', ['scripts']);
});
