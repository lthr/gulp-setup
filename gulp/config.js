const projectRoot = './';
const distDir = './dist';

module.exports = {
    rev: {
        dest: distDir,
        rootDir: projectRoot
    },
    clean: {
        src: [`${distDir}/**`]
    },
    pcss: {
        src: ['./src/**/*.pcss'],
        dest: `${distDir}/css`,
        fileName: 'app.css'
    },
    scripts: {
        src: [
            './src/**/*.js',
            '!./src/**/*spec.js'
        ],
        dest: `${distDir}/js`,
        fileName: 'app.js'
    },
    templates: {
        src: [
            './src/**/*.html'
        ],
        dest: `${distDir}/js`
    },
    img: {
        src: `${projectRoot}/src/img/*`,
        dest: `${distDir}/img`
    },
    vendor: {
        js: {
            src: [
                './node_modules/jquery/dist/jquery.min.js',
                './node_modules/angular/angular.min.js',
                './node_modules/bootstrap/dist/js/bootstrap.min.js'
            ],
            dest: `${distDir}/js`,
            fileName: 'vendor.js'
        },
        css: {
            src: [
                './node_modules/bootstrap/dist/css/bootstrap.min.css'
            ],
            dest: `${distDir}/css`,
            fileName: 'vendor.css'
        },
        fonts: {
            src: [
                './node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff',
                './node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff2',
                './node_modules/bootstrap/fonts/glyphicons-halflings-regular.ttf'
            ],
            dest: `${distDir}/fonts`
        }
    }
};