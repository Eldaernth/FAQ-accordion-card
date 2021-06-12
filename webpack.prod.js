const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(`${__dirname}/dist`),
    filename: 'main.[contenthash].js',
  },
  plugins: [
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
