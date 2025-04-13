import gulp from 'gulp';
import babel from 'gulp-babel';
import autoprefixer from 'gulp-autoprefixer';
import changed from 'gulp-changed';
import cleanCss from 'gulp-clean-css';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import uglify from 'gulp-uglify';
import del from 'del';

const sass = gulpSass(dartSass);

/**
 * Asset paths.
 */
const srcSCSS = 'scss/**/*.scss';
const srcJS = 'js/*.js';
const assetsDir = '../assets/';

/**
 * Clean tasks - löscht nur bestimmte CSS-Dateien vor der Neukompilierung
 * country-flags.css.liquid und theme.css.liquid bleiben unberührt
 */
gulp.task('clean:css', async function() {
  // Wir löschen nur bestimmte Dateien und keine Wildcard-Muster
  // um sicherzustellen, dass wichtige Dateien nicht betroffen sind
  const filesToDelete = [
    `${assetsDir}dist.css.liquid`,
    // Fügen Sie hier weitere spezifische Dateien hinzu, die gelöscht werden sollen
    `${assetsDir}custom.css.liquid`
  ];
  
  return del(filesToDelete, { force: true });
});

/**
 * SCSS task
 */
gulp.task('scss', gulp.series('clean:css', () => {
    return gulp.src('scss/*.scss.liquid')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer({ cascade : false }))
        .pipe(rename((path) => {
            path.basename = path.basename.replace('.scss', '.css')
            path.extname = '.liquid';
        }))
        .pipe(replace('"{{', '{{'))
        .pipe(replace('}}"', '}}'))
        .pipe(cleanCss())
        .pipe(gulp.dest(assetsDir));
}));

/**
 * JS task
 *
 * Note: use npm to install libraries and add them below, like the babel-polyfill example
 */
const jsFiles = [
    './node_modules/babel-polyfill/dist/polyfill.js',
    srcJS,
];

gulp.task('js', () => {
    return gulp.src(jsFiles)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('custom.js'))
        .pipe(uglify())
        .pipe(gulp.dest(assetsDir));
});

/**
 * Images task
 */
gulp.task('images', () => {
    return gulp.src('images/**')
        .pipe(changed(assetsDir)) // ignore unchanged files
        .pipe(gulp.dest(assetsDir))
});

/**
 * Fonts task
 */
gulp.task('fonts', () => {
    return gulp.src('fonts/**')
        .pipe(changed(assetsDir)) // ignore unchanged files
        .pipe(gulp.dest(assetsDir))
});

/**
 * Watch task
 */
gulp.task('watch', () => {
    gulp.watch(srcSCSS, gulp.series('scss')).on('change', (path) => {
        console.log(`File ${path} was changed, running scss task...`);
    });
    gulp.watch(srcJS, gulp.series('js')).on('change', (path) => {
        console.log(`File ${path} was changed, running js task...`);
    });
    gulp.watch('images/*.{jpg,jpeg,png,gif,svg}', gulp.series('images')).on('change', (path) => {
        console.log(`File ${path} was changed, running images task...`);
    });
    gulp.watch('fonts/*.{eot,svg,ttf,woff,woff2}', gulp.series('fonts')).on('change', (path) => {
        console.log(`File ${path} was changed, running fonts task...`);
    });
});

/**
 * Default task
 */
gulp.task('default', gulp.series(gulp.parallel('scss', 'js', 'images', 'fonts', 'watch'))); 