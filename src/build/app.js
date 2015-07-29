
var gulp = require('gulp')
var babelify = require('babelify')
var watchify = require('watchify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var c = require('./common')

var bundler = browserify('./src/app/main.js', {
	paths: ['./node_modules', './src/lib', './src/app'],
	debug: true,
	verbose: true
}).transform(babelify)

gulp.task('app-min', function() {
	return c.emit(bundler.bundle()
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(c.uglify()))
})

gulp.task('app-watch', function() {
	bundler = watchify(bundler)
	function bundle() {
		return c.emit(bundler.bundle()
			.on('error', c.logError)
			.pipe(source('app.js')))
	}
	bundler.on('update', bundle)
	bundler.on('log', c.util.log)
	return bundle()
})
