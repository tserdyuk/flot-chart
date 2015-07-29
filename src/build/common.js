
var gulp = require('gulp')
var gp = require('gulp-load-plugins')()

gp.emit = function(stream) {
	return stream
		.pipe(gulp.dest('./dist'))
		.pipe(gp.connect.reload())
}

gp.logError = function(error) {
	gp.util.log(gp.util.colors.red('ERROR'), error.message)
	this.emit('end')
}

module.exports = gp
