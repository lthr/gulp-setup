const gulp = require('gulp');
const config = require('../config');
const browserSync = require('browser-sync').create();
const modRewrite = require('connect-modrewrite');

/***************************************************************************
 *
 * launches the local server for development use
 *
 **************************************************************************/

gulp.task('default', ['serve']);

gulp.task('serve', ['build'], function() {
    browserSync.init({
        server: {
            baseDir: './',
            middleware: [
                modRewrite([
                    '^[^\\.]*$ /index.html [L]'
                ])
            ]
        }
    });
    gulp.watch("./index.html").on('change', browserSync.reload);
    gulp.watch(config.templates.src, ['templates']);
    gulp.watch(config.scripts.src, ['scripts']);
    gulp.watch(config.pcss.src, ['pcss']);
});