var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

gulp.task('transform', function() {
  return gulp.src('app/src/**')
    .pipe(react())
    .pipe(gulp.dest('./public/'));
});

gulp.task('watch', function(){
  gulp.watch('app/src/**', ['transform']);
});

gulp.task('default', ['watch']);