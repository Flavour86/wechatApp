const gutil = require('gulp-util');

function log() {
  var data = Array.prototype.slice.call(arguments);
  gutil.log.apply(null, data);
}
module.exports = {
  color: gutil.colors,
  log: log
}
