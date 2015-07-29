
require('gulp').task('serve', function() {
	require('gulp-connect').server({
		port: 8000,
		root: './dist',
		livereload: true
	})
})
