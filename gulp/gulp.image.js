const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

// 压缩图片
function imageMin() {
  return gulp.src(config.src.imgFiles.concat(config.filter.imgFilter))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest(config.distPath));
}

module.exports = imageMin
