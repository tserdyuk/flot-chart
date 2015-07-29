'use strict'

var gulp = require('gulp')
require('require-dir')('./src/build')

gulp.task('default', ['assets', 'style-min', 'html', 'app-min'])

gulp.task('watch', ['assets', 'style', 'html', 'app-watch'], function() {
	gulp.watch('./src/app/**/*.scss', ['style'])
	gulp.watch('./src/app/*.jade', ['html'])
})
