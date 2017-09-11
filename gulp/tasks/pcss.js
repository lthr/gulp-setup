const gulp = require('gulp');
const config = require('../config').pcss;
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const cssnext = require('postcss-cssnext');
const postcss = require('gulp-postcss');
const postcssMixins = require('postcss-mixins');
const sourceMaps = require('gulp-sourcemaps');

/***************************************************************************
 *
 * take all post-css files and convert to regular css with browser fallback
 *
 **************************************************************************/

const processors = [cssnext(), postcssMixins];

gulp.task('pcss', () => {
    return gulp.src(config.src)
        .pipe(sourceMaps.init())
        .pipe(concat(config.fileName))
        .pipe(postcss(processors))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.stream());
});

gulp.task('pcss:server', () => {
    return gulp.src(config.src)
        .pipe(concat('app.css'))
        .pipe(postcss(processors))
        .pipe(gulp.dest(config.dest));
});