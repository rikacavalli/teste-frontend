'use strict';

// Modules
var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

// Task javascript
gulp.task('task-js', function() {
    return gulp
        .src(['src/js/**/*.js'])
        .pipe(concat('script.js'))
        .pipe(gulp.dest('build/js'))
});

// Task sass
gulp.task('task-sass', function() {
    return gulp
    	.src('src/sass/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    	.pipe(gulp.dest('build/style'));  
});

// Watch
gulp.task('watch', function() {
    // javascript
    gulp.watch('src/js/**/*.js', function(event) {
        gutil.log('Hey! File '+event.path+' was '+event.type+', running tasks...');
        gulp.run('task-js');
    });

    // sass
    gulp.watch('src/sass/**/*.scss', function(event) {
        gutil.log('Hey! File '+event.path+' was '+event.type+', running tasks...');
        gulp.run('task-sass');
    });
});

// Task default
gulp.task('default', ['task-js', 'task-sass', 'watch']);