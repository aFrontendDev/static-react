'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var wrench = require('wrench');
var del = require('del');
var environments = require('gulp-environments');
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var shell = require('gulp-shell');
var rename = require('gulp-rename');

var config = require('./gulp/config');

// build tasks
var build = function(callback) {
    runSequence(
        // 'clean:everything',
        // 'styles',
        // 'scripts-dev',
        // 'assets',
        'listings',
        callback
    );
};

var prodBuild = function(callback) {
    runSequence(
        'clean:everything',
        'styles',
        'minify-css',
        'scripts-prod',
        'assets',
        callback
    );
};

/**
 *  This will load all js files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
    return (/\.(js)$/i).test(file);
}).map(function(file) {
    require('./gulp/' + file);
});

gulp.task('clean:everything', function() {
    return del('dist');
});

// DEV build
gulp.task('build', function(callback) {
    environments.current(environments.development);
    build(callback);
});

// PROD build
gulp.task('production', function(callback) {
    environments.current(environments.production);
    prodBuild(callback);
});

// WATCH TASK
gulp.task('watch', ['build'], function() {
    livereload.listen();
    gulp.watch(config.paths.styles.src + '**/*.scss', ['styles', 'assets']);
    gulp.watch(config.paths.temp.src + '**/*', ['assets']);
    gulp.watch(config.paths.images.src + '**/*', ['assets']);
    gulp.watch(config.paths.scripts.src + '**/*.js', ['scripts-dev']);
});

gulp.task('commandline', shell.task([
	'node build',
]));

gulp.task('build_assets', ['commandline'], function () {
    runSequence(
        'clean:everything',
        'styles',
        'scripts-dev',
        'assets'
    );
});

gulp.task('build_assets_watch', ['commandline'], function () {
    runSequence(
        'clean:everything',
        'styles',
        'scripts-dev',
        'assets'
    );
    livereload.listen();
    gulp.watch(config.paths.styles.src + '**/*.scss', ['styles', 'assets']);
    gulp.watch(config.paths.temp.src + '**/*', ['assets']);
    gulp.watch(config.paths.images.src + '**/*', ['assets']);
    gulp.watch(config.paths.scripts.src + '**/*.js', ['scripts-dev']);
});
/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['build_assets']);

gulp.task('build_watch', ['build_assets_watch']);

gulp.task('deploy', function(callback) {
	runSequence(
        'production',
        'offline',
        'dotnet_publish',
        'online',
        callback
    );
});

gulp.task('offline', function() {
	return gulp.src('./_app_offline.htm')
		.pipe(rename('app_offline.htm'))
		.pipe(gulp.dest(gutil.env.dest));
});

gulp.task('dotnet_publish', shell.task([
	'dotnet restore',
	'dotnet publish --output "' + gutil.env.dest + '" --configuration Release'
]));

// WARNING - Windows only...
gulp.task('online', shell.task('del /q "' + gutil.env.dest + '\\app_offline.htm"'));

gulp.task('build-sln', ['production'], function() {
    gulp.src(config.paths.scripts.dist + '**/*')
    .pipe(gulp.dest(config.paths.sln.web + '/_scripts/'));

    gulp.src(config.paths.styles.dist + '**/*')
    .pipe(gulp.dest(config.paths.sln.web + '/_styles/'));

    gulp.src(config.paths.images.dist + '**/*')
    .pipe(gulp.dest(config.paths.sln.web + '/_images/'));
});
