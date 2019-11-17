'use strict';

const webpackMerge = require('webpack-merge'); // merge several webpack configs
const commonConfig = require('./webpack.config.common');
const helpers      = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    mode: 'development',

    devtool: 'cheap-module-eval-source-map', // This option controls if and how source maps are generated

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].bundle.js', // [name] returns the file name.
        chunkFilename: '[id].chunk.js' // [id] returns the chunk id
    },

    optimization: {
        // Skips the emitting phase whenever there are errors while compiling. 
        // This ensures that no erroring assets are emitted.
        noEmitOnErrors: true
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        // is currently the faster webpack TypeScript loader. 
                        // It uses dependency resolution to build modules dependency graph. 
                        // This relatively speeds up the build process.
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: helpers.root('tsconfig.json')
                        }
                    },
                    'angular2-template-loader', // is a chain-to loader that inlines all html and styles in Angular components.
                ],
                exclude: [/node_modules/]
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});