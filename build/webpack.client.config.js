const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin")

const isProd = process.env.NODE_ENV === 'production'

module.exports = merge(baseConfig, {
    entry: './src/entry-client.js',
    optimization: {
        splitChunks: {
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: isProd ? [
        // 此插件在输出目录中
        // 生成 `vue-ssr-client-manifest.json`。
        new VueSSRClientPlugin(),
        new SWPrecacheWebpackPlugin(
            {
                cacheId: 'wssr',
                dontCacheBustUrlsMatching: /\.\w{8}\./,
                filename: 'service-worker.js',
                minify: false,
                staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
            }
        )
    ] : [
        new VueSSRClientPlugin()
    ]
})