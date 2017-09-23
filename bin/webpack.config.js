const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const isDevServer = process.argv[1].indexOf('webpack-dev-server') !== -1;

const rootPath = path.resolve(__dirname, '..');

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  entry: path.resolve(rootPath, 'src', 'index'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(rootPath, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootPath, 'src', 'index.html'),
      inject: 'body',
    }),
    new ProgressBarPlugin()
  ],
  module: {
    loaders: [
      {
        test: file => (file.match(/\.js$/) && (!file.match(/\.css\.js$/))),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-2'],
              plugins: []
                .concat(['transform-runtime'])
            }
          }
        ]
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: []
          .concat(isDevServer ? {
            loader: 'react-hot-loader/webpack'
          } : [])
          .concat(
            [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['es2015', 'stage-2', 'react'],
                  plugins: []
                    .concat(['transform-runtime'])
                }
              }
            ]
          )
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: []
          .concat(isDevServer ? {
            loader: 'react-hot-loader/webpack'
          } : [])
          .concat(
            [
              {
                loader: 'ts-loader'
              }
            ]
          )
      },
      {
        test: /\.css\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'js-css-loader'
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-2'],
              plugins: []
                .concat(['transform-runtime'])
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: './asset/[hash].[ext]'
            }
          }
        ]
      }
    ]
  }
};
