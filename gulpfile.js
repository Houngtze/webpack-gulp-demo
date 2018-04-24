var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('myServer', function() {
  connect.server({
    root: 'src',
    port: 8000,
    livereload: true,
    host: '::'
  });
});