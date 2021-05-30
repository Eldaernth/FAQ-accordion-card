const { merge } = require('webpack-merge');
const path = require('path');
const CleanWebpack = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(`${__dirname}/dist`),
    filename: 'main.[contentHash].js',
  },
  plugins: [
    new CleanWebpack(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      minify: {
        removeAttributeQuotes: true,
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
});
