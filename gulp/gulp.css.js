const gulp = require('gulp')
const postcss = require('gulp-postcss')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const base64 = require('gulp-base64')
const gulpif = require('gulp-if')

function cssCompile() {

  return gulp.src(config.src.cssFiles.concat(config.filter.cssFilter))
    .pipe(postcss([
      require('postcss-easy-import')({
        glob: true
      }),
      require('postcss-url'),
      require('postcss-each'),
      require('postcss-px2rpx')(),
      require('precss')(),
      require('autoprefixer')({browsers: ['iOS >= 7', 'Android >= 4']}),
      require('postcss-sprites')(config.spriteConfig)
    ]))
    .pipe(base64({
      extensions: ['png', 'jpg', 'jpeg', 'gif'],
      maxImageSize: 10*1024*1024
    }))
    .pipe(gulpif(config.isProd, cleanCSS()))
    .pipe(rename({
      'extname': '.wxss'
    }))
    .pipe(gulp.dest(config.distPath))
}

module.exports = cssCompile
