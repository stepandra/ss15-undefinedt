'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var stylus = require('gulp-stylus');

gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(webserver({
            livereload: true,
            open: true,
            host: '0.0.0.0'
        }));
});

gulp.task('stylus', function () {
    gulp.src('./app/elements/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./app/elements/'));
});

gulp.task('default', function () {
    gulp.run(['webserver', 'stylus']);

    gulp.watch("./app/elements/**/*.styl", function(){
        gulp.run('stylus');
    });
});