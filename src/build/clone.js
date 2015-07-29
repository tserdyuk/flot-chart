
var gulp = require('gulp')
var c = require('./common')
var argv = require('yargs')
	.alias('p', 'project')
	.default('project', 'new-client')
	.argv
var dir = '../' + argv.project

gulp.task('clone', ['install', 'commit'])

gulp.task('install', ['package', 'copy-files'], c.shell.task([
	'npm install --save-dev babelify browserify del gulp gulp-concat ' +
	'gulp-connect gulp-jade gulp-load-plugins gulp-minify-css gulp-sass ' +
	'gulp-uglify gulp-util require-dir vinyl-buffer vinyl-source-stream ' +
	'watchify yargs',
	'npm install --save react qs'
], { cwd: dir }))

gulp.task('commit', ['package', 'copy-files', 'copy-src', 'hgrc'], c.shell.task([
	'hg add .',
	'hg commit -m "init"'
], { cwd: dir }))

gulp.task('package', ['repo'], function() {
	return gulp.src('./template.json')
		.pipe(c.replace(/project/g, argv.project))
		.pipe(c.rename('package.json'))
		.pipe(gulp.dest(dir))
})

gulp.task('copy-files', ['repo'], function() {
	return gulp.src(['./gulpfile.js', './README.md', './.hgignore'])
		.pipe(gulp.dest(dir))
})

gulp.task('copy-src', ['repo'], function() {
	return gulp.src('./src/**')
		.pipe(gulp.dest(dir + '/src'))
})

gulp.task('hgrc', ['repo'], function() {
	return gulp.src('./.hg/hgrc')
		.pipe(c.replace(/client-seed/, argv.project))
		.pipe(gulp.dest(dir + '/.hg'))
})

gulp.task('repo', c.shell.task([
	'hg init ' + argv.project
], { cwd: '..' }))
