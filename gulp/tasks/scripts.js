const gulp = require('gulp');
const config = require('../config').scripts;
const browserSync = require('browser-sync').create();
const bytediff = require('gulp-bytediff');
const concat = require('gulp-concat');
const wrap = require('gulp-wrap');
const ngAnnotate = require('gulp-ng-annotate');
const sourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

/***************************************************************************
 *
 * take all script files and concat, ng-annotate and minify
 *
 **************************************************************************/

gulp.task('scripts', function() {
    return gulp.src(config.src)
        .pipe(sourceMaps.init())
        .pipe(wrap('(function(angular, window){\n\'use strict\';\n<%= contents %>})(window.angular, window);'))
        .pipe(concat(config.fileName))
        .pipe(ngAnnotate())
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.stream());
});

gulp.task('scripts:server', function() {
    return gulp.src(config.src)
        .pipe(wrap('(function(angular, window){\n\'use strict\';\n<%= contents %>})(window.angular, window);'))
        .pipe(concat(config.fileName))
        .pipe(ngAnnotate())
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest(config.dest));
});