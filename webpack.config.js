var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Phaser webpack config
var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
  entry: './src/index',
  output: {
    pathInfo: true,
    filename: '[name].bundle.js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    }),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.(ts|tsx)$/, loader: 'ts', exclude: '/node_modules/' },
      { test: /\.css\.js$/, loader: 'style!css!js-css', exclude: '/node_modules/' },
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'file?name=asset/[hash].[ext]' }
    ]
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },
  devtool: 'source-map'
}
