const gulp = require('gulp');
const runSequence = require('run-sequence');

/***************************************************************************
 *
 * build configuration for local and server (prod) environments
 *
 **************************************************************************/

// local development build
gulp.task('build', () => {
    runSequence(
        'clean', ['pcss', 'templates', 'scripts', 'vendor', 'img']
    );
});

// server build
gulp.task('build:server', () => {
    runSequence(
        'clean', ['pcss:server', 'templates:server', 'scripts:server', 'vendor:server', 'img'],
        'revReplace'
    );
});