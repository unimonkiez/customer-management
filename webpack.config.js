var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevServer = process.argv[1].indexOf('webpack-dev-server') !== -1;

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  entry: './src/index',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    })
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
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-2', 'react'],
              plugins: []
                .concat(['transform-runtime'])
                .concat((isDevServer) ? ['react-hot-loader/babel'] : [])
            }
          }
        ]
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
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: []
                .concat((isDevServer) ? ['react-hot-loader/babel'] : [])
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.css\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css'
          },
          {
            loader: 'js-css'
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
