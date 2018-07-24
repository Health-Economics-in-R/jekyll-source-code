var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-csso'),
    minifyJs = require('gulp-minify'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat');

gulp.task('css', function () {
    return gulp.src('_sass/theme.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('assets/css'))
});

gulp.task('js', function () {
    return gulp.src(['node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/js/bootstrap.js'])
        .pipe(concat('bundle.js'))
        .pipe(sourcemaps.init())
        .pipe(minifyJs())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('assets/js'))
});

gulp.task('default', ['css', 'js']);

gulp.task('watch', function () {
    return gulp.watch("_sass/**/*",['css'])
});