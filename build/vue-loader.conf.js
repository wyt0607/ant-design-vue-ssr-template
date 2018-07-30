'use strict'
const utils = require('./utils')
const isProd = process.env.NODE_ENV === 'production'

const sourceMapEnabled = isProd ? false : true

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: sourceMapEnabled,
        extract: isProd
    }),
    cssSourceMap: sourceMapEnabled,
    cacheBusting: true,
    transformToRequire: {
        video: 'src',
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    }
}
