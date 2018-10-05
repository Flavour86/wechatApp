const gulp = require('gulp')
const filter = require('gulp-filter');

function copyBasicFiles() {
  let copyFilter = filter(['**/*'].concat(config.filter.copyFilter), {restore: true});

  return gulp.src(config.src.copyFiles)
    .pipe(copyFilter)
    .pipe(gulp.dest(config.distPath));
}

module.exports = copyBasicFiles
