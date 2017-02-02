const path = require('path');
const webpack = require('webpack');
const envvar = require('envvar');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: path.join(__dirname + '/build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('app.css', { allChunks: true })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.jsx/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(scss|sass|css)$/,
        include: [path.join(__dirname, 'src'), path.join('node_modules')],
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap'),
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/i,
        include: path.join(__dirname, 'src','assets'),
        loader: 'file',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        include: path.join(__dirname, 'src','assets'),
        loader: 'file',
      },
    ],
  },
};