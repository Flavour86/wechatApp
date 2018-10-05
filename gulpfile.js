const gulp = require('gulp');
const utils = require('./gulp/gulp.utils')
try {
  global.config = require('./config.js');
} catch (e) {
  utils.log(utils.color.red('配置文件丢失，请确认！'));
}
const del = require('del')
const imageMin = require('./gulp/gulp.image')
const cssCompile = require('./gulp/gulp.css')
const scriptCompile = require('./gulp/gulp.script')
const wxmlCompile = require('./gulp/gulp.wxml')
const copyBasicFiles = require('./gulp/gulp.static')
const watch = require('./gulp/gulp.watch')

function cleanTmp() {
  return del(config.distPath);
}

// development
gulp.task('default', gulp.series(
  copyBasicFiles,
  gulp.parallel(
    cssCompile,
    imageMin,
    wxmlCompile,
    scriptCompile
  ),
  watch
))

// production
gulp.task('build', gulp.series(
  cleanTmp,
  copyBasicFiles,
  gulp.parallel(
    cssCompile,
    imageMin,
    wxmlCompile,
    scriptCompile
  )
))


