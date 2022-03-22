const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    dingdong: './src/dingdong/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'build'),
    clean: true,
  }
}