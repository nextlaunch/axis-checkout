const getConfig = require('hjs-webpack')

const config = getConfig({
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

module.exports = config