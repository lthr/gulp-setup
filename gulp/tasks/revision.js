const gulp = require('gulp');
const config = require('../config').rev;
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const revdel = require('gulp-rev-delete-original');

/***************************************************************************
 *
 * add revisions so browsers don't cache old files (only run on server!)
 *
 **************************************************************************/

gulp.task('revision', () => {
    return gulp.src([`${config.dest}/**/*.js`, `${config.dest}/**/*.css`], { base: config.rootDir })
        .pipe(rev())
        .pipe(revdel())
        .pipe(gulp.dest(config.rootDir))
        .pipe(rev.manifest({}))
        .pipe(gulp.dest(config.dest))
});

gulp.task('revReplaceCsHtml', ['revision'], () => {
    const manifest = gulp.src(`${config.dest}/rev-manifest.json`);

    return gulp.src(`${config.rootDir}/Views/Shared/_layout.cshtml`)
        .pipe(revReplace({
            manifest: manifest,
            replaceInExtensions: ['.cshtml']
        }))
        .pipe(gulp.dest(`${config.rootDir}/Views/Shared`));
});

gulp.task('revReplaceCsProj', ['revReplaceCsHtml'], () => {
    const manifest = gulp.src(`${config.dest}/rev-manifest.json`);

    function replaceSlash(filename) {
        if (filename.indexOf('dist/') > -1) {
            filename = filename.replace(/\//g, '\\');
            return filename;
        }
        return filename;
    }

    return gulp.src(`${config.rootDir}/Templated-Salary-Input.csproj`)
        .pipe(revReplace({
            manifest: manifest,
            replaceInExtensions: ['.csproj'],
            modifyUnreved: replaceSlash,
            modifyReved: replaceSlash
        }))
        .pipe(gulp.dest(config.rootDir));
});

gulp.task('revReplace', ['revReplaceCsProj']);