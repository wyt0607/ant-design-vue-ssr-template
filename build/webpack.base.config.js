const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const {VueLoaderPlugin} = require('vue-loader')
const vueLoaderConfig = require('./vue-loader.conf')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

const styleLoaders = utils.styleLoaders({sourceMap: !isProd, extract: isProd, usePostCSS: true});

module.exports = {

    mode: process.env.NODE_ENV,
    devtool: isProd
        ? false
        : '#cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        // noParse: /es6-promise\.js$/, // avoid webpack shimming process
        rules: [
            ...styleLoaders,
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            // i18n yaml
            /*{
                resourceQuery: /blockType=i18n/,
                loader: ['@kazupon/vue-i18n-loader', 'yaml-loader']
            },*/
            // i18n json
            {
                resourceQuery: /blockType=i18n/,
                loader: '@kazupon/vue-i18n-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ],
    },
    plugins: isProd ? [
        new VueLoaderPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.DefinePlugin({
            'process.env': require('../config/prod.env')
        }),
    ] : [
        new VueLoaderPlugin(),
        new FriendlyErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        })
    ]
};