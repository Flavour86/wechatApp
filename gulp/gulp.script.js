const gulp = require('gulp')
const filter = require('gulp-filter')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const gulpif = require('gulp-if')

function scriptCompile() {
  let jsFilter = filter(['**/*'].concat(config.filter.jsFilter), {restore: true});

  return gulp.src(config.src.jsFiles)
    .pipe(jsFilter)
    .pipe(babel())
    .pipe(gulpif(config.isProd, uglify({
      mangle: { toplevel: true },
      output: {comments: false}
    })))
    .pipe(gulp.dest(config.distPath))
}

module.exports = scriptCompile
