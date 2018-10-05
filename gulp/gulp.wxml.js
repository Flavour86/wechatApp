const gulp = require('gulp')
const filter = require('gulp-filter')
const htmlmin = require('gulp-htmlmin')

function wxmlCompile() {
  const wxmlFilter = filter(['**/*'].concat(config.filter.wxmlFilter), {restore: true});

  return gulp.src('./src/**/*.wxml')
    .pipe(wxmlFilter)
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      keepClosingSlash: true
    }))
    .pipe(gulp.dest(config.distPath))
}

module.exports = wxmlCompile
