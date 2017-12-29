const gulp = require('gulp'),
      gulpSass = require('gulp-sass'),
      cleanCss = require('gulp-clean-css'),
      minifyJs = require('gulp-js-minify'),
      rename = require('gulp-rename');

gulp.task('compile-sass', () => {
  return gulp.src('./sass/style.scss')
             .pipe(gulpSass({errLogToConsole: true}))
             .pipe(gulp.dest('./css'));
});

gulp.task('watch-sass', () => {
  gulp.watch('./sass/**/*.scss', ['compile-sass']);
});

gulp.task('minify-css', () => {
  return gulp.src('./css/style.css')
             .pipe(cleanCss({compatibility: 'ie8'}))
             .pipe(rename('style.min.css'))
             .pipe(gulp.dest('./css'));
});

gulp.task('minify-js', () => {
  gulp.src('./js/main.js')
      .pipe(minifyJs())
      .pipe(rename('main.min.js'))
      .pipe(gulp.dest('./js'));
});
