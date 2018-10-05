// 源码目录
const appPath = './src'
// 打包目录
const distPath = './dist'
const src = {
  imgFiles: [appPath + '/**/*.{png,jpg,jpeg,svg,gif,bmp,ico}'],  // 图片泛路径
  cssFiles: [appPath + '/**/*.css'],  // css泛路径
  wxmlFiles: [appPath + '/**/*.wxml'], // wxml泛路径
  copyFiles: [appPath + '/**/*.{json,eot,ttf,woff}'], // 需要copy的静态资源泛路径
  jsFiles: [appPath + '/**/*.js'] // js泛路径
}
const filter = {
  imgFilter: ['!' + appPath + '/assets/sprites/**/*'], // 需要过滤的图片
  cssFilter: ['!' + appPath + '/assets/css/**/*.css'], // 需要过滤的css
  copyFilter: [],
  jsFilter: [],
  wxmlFilter: []
}
const spriteConfig = {
  spritePath: distPath + '/assets/sprites'  //
}
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  appPath: appPath,
  distPath: distPath,
  src: src,
  filter: filter,
  spriteConfig: spriteConfig,
  isProd: isProd
}
