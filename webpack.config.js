const getConfig = require('hjs-webpack');

module.exports = getConfig({
  in: 'example/example.js',
  out: 'public',
  output: {
    filename: 'example-bundle.js'
  },
  html: false,
  devServer: {
    contentBase: __dirname + '/example'
  },
  clearBeforeBuild: true
});