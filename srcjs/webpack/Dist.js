'use strict';

/**
 * Dist configuration. Used to build the
 * final output when running npm run dist.
 */
const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');

const generateAppsConfig = require('./utils');


const { entry } = generateAppsConfig( ['babel-polyfill','whatwg-fetch']);


class WebpackDistConfig extends WebpackBaseConfig {

  constructor() {
    super();
    this.config = {
      cache: false,
      devtool: 'cheap-module-source-map',
      entry,
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
          new webpack.optimize.CommonsChunkPlugin({
              name: "commons",
              filename: "php/js/dist/commons.js",
              minChunks: (m) => /node_modules\/(?:react-redux|redux-thunk|redux-form|react|reactstrap|wretch)/.test(m.context)
          }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            comparisons: true,
            conditionals: true,
            dead_code: true,
            drop_console: true, // Keep server logs
            drop_debugger: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
            screw_ie8: false,
            sequences: true,
            unused: true,
            warnings: false,
          },
          sourceMap: false,
          output: {
            comments: false,
          },
        }),
        new webpack.NoEmitOnErrorsPlugin()
      ]
    };

    // Deactivate hot-reloading if we run dist build on the dev server
    this.config.devServer.hot = false;
  }

  /**
   * Get the environment name
   * @return {String} The current environment
   */
  get env() {
    return 'dist';
  }
}

module.exports = WebpackDistConfig;