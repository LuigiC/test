var gulp = require('gulp')
var concat = require('gulp-concat')
var jasmine = require('gulp-jasmine')

gulp.task('js', function () {
  gulp.src(['controller/module.js', 'controller/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('.'))
});

gulp.task('default', function(){
	gulp.src('test/offersCtrlTest.js').pipe(jasmine());
});