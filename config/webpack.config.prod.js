'use strict';

const webpackMerge            = require('webpack-merge');
const ngw                     = require('@ngtools/webpack');
const UglifyJsPlugin          = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano                 = require('cssnano');

const commonConfig            = require('./webpack.config.common');
const helpers                 = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    mode: 'production',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[hash].js', // returns the build hash. If any portion of the build changes, this changes as well.
        chunkFilename: '[id].[hash].chunk.js'
    },

    optimization: {
        noEmitOnErrors: true,
        splitChunks: {
            chunks: 'all' //  indicates which chunks will be selected for optimization.
        },
        runtimeChunk: 'single',
        minimizer: [
            new UglifyJsPlugin({ // uses uglify-js to minify your JavaScript files
                cache: true,
                parallel: true
            }),

            // will search for CSS assets during the webpack build and will optimize and minimize it. 
            // The CSS processor used for optimization is cssnano. 
            // All comments will be removed from our minified CSS and no messages will be print to the console.
            new OptimizeCSSAssetsPlugin({ // 
                cssProcessor: cssnano,
                cssProcessorOptions: {
                    discardComments: {
                        removeAll: true
                    }
                },
                canPrint: false
            })
        ]
    },

    module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                loader: '@ngtools/webpack'
            }
        ]
    },

    plugins: [
        new ngw.AngularCompilerPlugin({
            tsConfigPath: helpers.root('tsconfig.aot.json'),
            entryModule: helpers.root('src', 'app', 'app.module#AppModule')
        })
    ]
});