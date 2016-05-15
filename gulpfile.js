var gulp = require('gulp');
var concat = require('gulp-concat');
var jasmine = require('gulp-jasmine');
var requireAngular = require('gulp-require-angular');

gulp.task('js', function () {
  gulp.src(['controller/module.js', 'controller/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('.'))
});

gulp.task('test', function(){
	gulp.src('test/offersCtrlTest.js').pipe(jasmine());
});

gulp.task('requireAngular', function () {
	gulp.src(['./controller/*.js'])
        .pipe(requireAngular('skyTest'))
        .pipe(gulp.dest('./'))
});

gulp.task( 'serverstart', function() {
    server.listen( { path: './app.js' } );
});