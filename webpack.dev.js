const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(`${__dirname}/dist`),
    filename: 'main.js',
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
});
