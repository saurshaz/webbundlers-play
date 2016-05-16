/* global __dirname */
/* generated by unstuck-webpack */

// var path = require('path')
// var webpack = require('webpack')
// var dir_js = path.resolve(__dirname, 'app/scripts')
// var dir_css = path.resolve(__dirname, 'css')
// var dir_build = path.resolve(__dirname, 'dist')
// var fs = require('fs')

// var nodeModules = {}
// fs.readdirSync('node_modules')
//   .filter(function (x) {
//     return ['.bin'].indexOf(x) === -1
//   })
//   .forEach(function (mod) {
//     nodeModules[mod] = 'commonjs ' + mod
//   })

// module.exports = {
//   entry: {
//     app: path.resolve(dir_js, 'index.js')
//   },
//   target: 'node',
//   output: {
//     path: dir_build,
//     filename: 'bundle.js'
//   },
//   externals: nodeModules,
//   resolve: {
//     modulesDirectories: ['node_modules', dir_js],
//   },
//   devServer: {
//     contentBase: dir_build,
//   },
//   postcss: function () {
//     return [require('autoprefixer')]
//   },
//   devtool: 'source-map',
//   stats: {
//     colors: true,
//     chunkModules: false
//   },
//   plugins: [
//     new webpack.optimize.CommonsChunkPlugin('vendor', '[name].js'),
//     new webpack.NoErrorsPlugin()
//   ],

//   module: {

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
    filename: 'bundle.js',
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
  //   }
  // }
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
    new webpack.optimize.CommonsChunkPlugin('main', 'bundle.js'),
    // new ExtractTextPlugin("styles/main.css"),
    new webpack.optimize.UglifyJsPlugin(),
  // new webpack.ProvidePlugin({
  //   riot: 'riot'
  // })
  ],
  progress: true,
// postcss: [
//   require('postcss-import')({ addDependencyTo: webpack }),
//   require('precss')(),
//   require('autoprefixer')({ browsers: 'last 2 versions' })
// ]
}
