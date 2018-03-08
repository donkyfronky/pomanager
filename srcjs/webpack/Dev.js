'use strict';

/**
 * Default dev server configuration.
 */
const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');
const generateAppsConfig = require('./utils');


const hmr = [
    'babel-polyfill',
    'react-hot-loader/patch',
    //'webpack-hot-middleware/client?noInfo=false'
];



const { entry } = generateAppsConfig(hmr);

entry.vendor = [
    'babel-polyfill',
    'prop-types',
    'react-hot-loader'
];

//entry.vendor = vendor;

class WebpackDevConfig extends WebpackBaseConfig {

    constructor() {
        super();
        this.config = {
            devtool: 'cheap-module-source-map',
            entry,
            plugins: [
                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery',
                    'window.jQuery': 'jquery'
                }),
                new webpack.DefinePlugin({
                    'process.env': {
                        'NODE_ENV': JSON.stringify('development')
                    }
                }),
                new webpack.HotModuleReplacementPlugin(),
                new webpack.NoEmitOnErrorsPlugin(),
                new webpack.NamedModulesPlugin(),
                new DashboardPlugin(),
                new webpack.optimize.CommonsChunkPlugin({
                    name: ['vendor'],
                    filename: './build/vendor.js',
                    minChunks: Infinity
                })
            ],
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        loaders: ['react-hot-loader/webpack'],
                        include: path.join(__dirname, 'src')
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
                        exclude: /node_modules/,
                        // include: [].concat(this.includedPackages, [this.srcPathAbsolute]),
                        loaders: [{ loader: 'babel-loader' }]
                    },
                ]
            }
        };
    }
}

module.exports = WebpackDevConfig;
