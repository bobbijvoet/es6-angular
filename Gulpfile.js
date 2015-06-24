var gulp = require('gulp'),
  connect = require('gulp-connect');

// Html task
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

//Js task
gulp.task('js', function () {
  gulp.src('./app/**/**.js')
    .pipe(connect.reload());
});

// Watch our changes
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/**/*.js'], ['js']);
});

gulp.task('connect', function () {
  connect.server({
    livereload: true
  });
});

// Start the tasks
gulp.task('default', ['connect', 'watch']);