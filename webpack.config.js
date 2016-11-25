const getConfig = require('hjs-webpack')

const config = getConfig({
  in: 'src/index.js',
  out: 'lib',
  output: {
    filename: '[name].js'
  },
  html: false,
  devServer: {
    contentBase: __dirname + '/example'
  },
  clearBeforeBuild: true
})

config.entry = {
  'checkout': config.entry,
  'example-bundle': __dirname + '/example/example.js'
}

module.exports = config