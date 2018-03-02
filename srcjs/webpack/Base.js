'use strict';
const fs = require('fs');
const path = require('path');
const npmBase = path.join(__dirname, '../node_modules');
const webpack = require('webpack');
const generateAppsConfig = require('./utils');
const { entry } = generateAppsConfig();

class WebpackBaseConfig {
  constructor() {
    this._config = {};
  }
  get includedPackages() {
    return [].map(pkg => fs.realpathSync(path.join(npmBase, pkg)));
  }
  set config(data) {
    this._config = Object.assign({}, this.defaultSettings, data);
    return this._config;
  }
  get config() {
    return this._config;
  }
  get env() {
    return 'dev';
  }
  get devServerParams() {
    return {
      server: '0.0.0.0',
      port: 3001,
    }
  }
  get srcPathAbsolute() {
    return path.resolve('./src');
  }
  get testPathAbsolute() {
    return path.resolve('./test');
  }
  get defaultSettings() {
    return {
      context: this.srcPathAbsolute,
      devtool: 'eval',
      devServer: {
        contentBase: 'php/js/src/',
        publicPath: '/',
        historyApiFallback: true,
        hot: true,
        inline: true,
        host: this.devServerParams.server,
        port: this.devServerParams.port,
        disableHostCheck: true, // To enable local network testing
        overlay: true,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        stats: {
          assets: true,
          children: false,
          chunks: false,
          hash: false,
          modules: false,
          publicPath: false,
          timings: true,
          version: false,
          warnings: true,
          colors: true,
        },
      },
      entry,
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.js?$/,
            include: this.srcPathAbsolute,
            loader: 'babel-loader'
          },
          {
            test: /^.((?!cssmodule).)*\.css$/,
            loaders: [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
            ]
          },
          {
            test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2)$/,
            loader: 'file-loader'
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          },
          {
            test: /\.(js|jsx)$/,
            include: [].concat(this.includedPackages, [this.srcPathAbsolute]),
            loaders: [{ loader: 'babel-loader' }]
          },
        ]
      },
      output: {
        path: __dirname + '/',
        filename: '[name].js',
        publicPath: 'http://www.pomanager.it/:' + this.devServerParams.port + '/'
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
        }),
        new webpack.DefinePlugin({
          '__GLOBALS__.dev': 'true',
          '__GLOBALS__.prod': 'false',
        }),
      ],
      resolve: {
        extensions: [
          '.js',
          '.jsx'
        ],
        modules: [
          this.srcPathAbsolute,
          'node_modules'
        ]
      }
    };
  }
}
module.exports = WebpackBaseConfig;