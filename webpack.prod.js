const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'production',
    externals: {
        react: 'react', // Prevent bundling React
        'react-dom': 'react-dom', // Prevent bundling React DOM
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        libraryTarget: 'umd',
        globalObject: 'this',
    },
})
