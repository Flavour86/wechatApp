const path = require('path')
const gulp = require('gulp')
const utils = require('./gulp.utils')
const imageMin = require('./gulp.image')
const cssCompile = require('./gulp.css')
const scriptCompile = require('./gulp.script')
const wxmlCompile = require('./gulp.wxml')
const copyBasicFiles = require('./gulp.static')
const del = require('del')

function watchHandler(type, file) {
  const extname = path.extname(file);
  if (type === 'removed') {
    const isCssFile = extname === '.css'
    const tmp = isCssFile ? file.replace('src/', 'dist/').replace(extname, '.wxss') : file.replace('src/', 'dist/')
    del[tmp]
  } else {
    if (extname === '.css') {
      cssCompile()
    } else if (extname === '.png' || extname === '.jpg' || extname === '.jpeg'  || extname === '.svg' || extname === '.gif') {
      imageMin()
    } else if (extname === '.wxml') {
      wxmlCompile()
    } else if (extname === '.js') {
      scriptCompile()
    } else {
      copyBasicFiles()
    }
  }
}

function watch(cb) {
  var watcher = gulp.watch([
    config.appPath
  ]);
  watcher
    .on('change', function (file) {
      // utils.log(utils.color.yellow(file) + ' is changed');
      watchHandler('changed', file);
    })
    .on('add', function (file) {
      // utils.log(utils.color.yellow(file) + ' is added');
      watchHandler('add', file);
    })
    .on('unlink', function (file) {
      // utils.log(utils.color.yellow(file) + ' is deleted');
      watchHandler('removed', file);
    });
  cb();
}

module.exports = watch
