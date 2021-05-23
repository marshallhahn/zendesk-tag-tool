const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TranslationsPlugin = require('./webpack/translations-plugin');

const externalAssets = {
  css: ['https://cdn.jsdelivr.net/bootstrap/2.3.2/css/bootstrap.min.css'],
  js: ['https://assets.zendesk.com/apps/sdk/2.0/zaf_sdk.js'],
};

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/assets'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        type: 'javascript/auto',
        test: /\.json$/,
        include: path.resolve(__dirname, './src/translations'),
        use: './webpack/translations-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } },
          'postcss-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),

    // Copy over static assets
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/manifest.json', to: '../', flatten: true },
        { from: 'src/images/*', to: '.', flatten: true },
      ],
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),

    new TranslationsPlugin({
      path: path.resolve(__dirname, './src/translations'),
    }),

    new HtmlWebpackPlugin({
      warning:
        'AUTOMATICALLY GENERATED FROM ./src/templates/iframe.html - DO NOT MODIFY THIS FILE DIRECTLY',
      vendorCss: externalAssets.css.filter((path) => !!path),
      vendorJs: externalAssets.js,
      template: './src/templates/iframe.html',
      filename: 'iframe.html',
    }),
  ],
};
