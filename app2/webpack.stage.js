'use strict'

var path = require('path')
var webpack = require('webpack')
var fs = require('fs')
var outputPath = path.resolve(__dirname, './dist')
// process.env.HOST='188.166.230.193'
var host = process.env.HOST || '0.0.0.0'
var port = 8098 || parseInt(process.env.PORT, 10)

module.exports = {
  target: 'web',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    'main': [
      './app/scripts/index.js'
    ]
  },

  debug: true,
  output: {
    path: outputPath,
    filename: 'main.js',
    publicPath: './dist/'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        presets: ['es2015']
      },
      {
        loader: 'file?name=/dist[name].html',
        test: /\.html$/
      }
    ]
  },
  resolve: {
    extensions: ['', '.react.js', '.js', '.jsx', '.scss'],
    modulesDirectories: [
      'source', 'node_modules'
    ]
  },
  plugins: [
    // extract inline css from modules into separate files
    new webpack.HotModuleReplacementPlugin(),
    // hot reload
    new webpack.IgnorePlugin(/\.json$/),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    }),
    new webpack.optimize.CommonsChunkPlugin('main', 'main.js'),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  progress: true,
}
