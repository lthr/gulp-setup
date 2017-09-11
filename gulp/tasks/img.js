const gulp = require('gulp');
const config = require('../config').img;

/***************************************************************************
 *
 * copy all images to dist folder
 *
 **************************************************************************/

gulp.task('img', () => {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});