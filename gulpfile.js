var gulp = require("gulp");
var jade = require("gulp-jade");

gulp.task('templates', function() {
  var YOUR_LOCALS = {};

  gulp.src('./views/index.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('./www/'));
});

gulp.task('watch', function() {
  gulp.watch('./views/*.jade', ['templates']);
});
