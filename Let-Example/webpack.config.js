var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: { 
    path: path.join(__dirname, "build"),
    filename: 'ddt.js' 
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
};