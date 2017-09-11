const gulp = require('gulp');
const config = require('../config');

/***************************************************************************
 *
 * watches files and rebuilds when changed
 *
 **************************************************************************/

gulp.task('watch', ['build'], function() {
    gulp.watch(config.templates.src, ['templates']);
    gulp.watch(config.scripts.src, ['scripts']);
    gulp.watch(config.pcss.src, ['pcss']);
});