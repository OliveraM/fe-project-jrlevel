/* TODO:
	npm install gulp
	npm install gulp-less
	npm install gulp-concat
 */

var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('default', function() {
  // This does nothing for now, we'll add functionality soon
});

gulp.task('copy', function(){
	return gulp.src('src/css/*')
	.pipe(gulp.dest('probica'))
	.pipe;
});


gulp.task('less-compile', function(){
	return gulp.src('src/style/less/*.less')
	.pipe(concat('main.css'))
	.pipe(less())
	.pipe(gulp.dest('src/style/css'));
});