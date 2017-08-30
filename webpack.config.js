const FileList = require('./plugins/filelist.js')

module.exports = {
  entry: './src/entry.js',
  output: {
		path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: 'style-loader!css-loader' }
    ]
  },
  plugins: [
    new FileList({options: true})
  ]
}
