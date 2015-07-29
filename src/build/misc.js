
var gulp = require('gulp')
var c = require('./common')

gulp.task('assets', function() {
	return c.emit(gulp.src(['./assets/**']))
})

gulp.task('html', function() {
	return c.emit(gulp.src('./src/app/*.jade')
		.pipe(c.jade()))
})

gulp.task('style-min', function() {
	return c.emit(style()
		.pipe(c.minifyCss()))
})

gulp.task('style', function() { c.emit(style()) })

function style() {
	return c.emit(gulp.src('./src/app/**/*.scss')
		.pipe(c.sass().on('error', c.sass.logError))
		.pipe(c.concat('style.css')))
}
