const gulp = require('gulp');
const postcss = require('gulp-postcss');

gulp.task('css', function() {
  let plugins = [

  ];

  return gulp.src('./postcss/src/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./postcss/dest'));
});