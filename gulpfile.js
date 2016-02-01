var gulp = require('gulp');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var gutil = require('gulp-util');
var babelify = require('babelify');
//var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
//var debug = require('gulp-debug');
var es = require('event-stream');
//var ts = require('gulp-typescript');

var gulp_src = gulp.src;
gulp.src = function() {
  return gulp_src.apply(gulp, arguments)
    .pipe(plumber(function(error) {
        // Output an error message
        gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
        // emit the end event, to properly end the task
        this.emit('end');
      })
    );
};


gulp.task('js', function() {

  var files = ['app.js'];

  var tasks  = files.map(function(entry){

    return browserify({
      entries: entry,
      basedir: './src',
      extensions: ['.js'],
      debug: true
    }).transform(babelify)
      .bundle()
      .pipe(source(entry))
      .pipe(plumber())
      .pipe(rename({
        extname: '.bundle.js'
      }))
      .pipe(gulp.dest('dist/public/js')
      );
  });

  return es.merge.apply(null, tasks);
});