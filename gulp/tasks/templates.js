const gulp = require('gulp');
const config = require('../config').templates;
const browserSync = require('browser-sync').create();
const sourceMaps = require('gulp-sourcemaps');
const templateCache = require('gulp-angular-templatecache');

/***************************************************************************
 *
 * take all template files and move them to javascript template cache
 *
 **************************************************************************/

gulp.task('templates', function() {
    return gulp.src(config.src)
        .pipe(sourceMaps.init())
        .pipe(templateCache({
            module: 'TSI'
        }))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.stream());
});

gulp.task('templates:server', function() {
    return gulp.src(config.src)
        .pipe(templateCache({
            module: 'TSI'
        }))
        .pipe(gulp.dest(config.dest));
});