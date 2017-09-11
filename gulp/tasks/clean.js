const gulp = require('gulp');
const config = require('../config').clean;
const del = require('del');

/***************************************************************************
 *
 * delete content
 *
 **************************************************************************/

gulp.task('clean', function() {
    return del(config.src);
});