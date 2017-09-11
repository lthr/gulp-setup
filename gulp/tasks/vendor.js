const gulp = require('gulp');
const config = require('../config').vendor;
const concat = require('gulp-concat');
const sourceMaps = require('gulp-sourcemaps');

/***************************************************************************
 *
 * take all vendor files and concat
 *
 **************************************************************************/

gulp.task('vendor', ['vendor:js', 'vendor:css', 'vendor:fonts']);
gulp.task('vendor:server', ['vendor:js:server', 'vendor:css:server', 'vendor:fonts']);

gulp.task('vendor:js', () => {
    return gulp.src(config.js.src)
        .pipe(sourceMaps.init())
        .pipe(concat(config.js.fileName))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest(config.js.dest));
});

gulp.task('vendor:js:server', () => {
    return gulp.src(config.js.src)
        .pipe(concat(config.js.fileName))
        .pipe(gulp.dest(config.js.dest));
});

gulp.task('vendor:css', () => {
    return gulp.src(config.css.src)
        .pipe(sourceMaps.init())
        .pipe(concat(config.css.fileName))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest(config.css.dest));
});

gulp.task('vendor:css:server', () => {
    return gulp.src(config.css.src)
        .pipe(concat(config.css.fileName))
        .pipe(gulp.dest(config.css.dest));
});

gulp.task('vendor:fonts', () => {
    return gulp.src(config.fonts.src)
        .pipe(gulp.dest(config.fonts.dest));
});