const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.js');
const components = require('./components.json')
process.env.NODE_ENV = 'production';

const basePath = path.resolve(__dirname, '../')
let entries = {}
Object.keys(components).forEach(key => {
    entries[key] = path.join(basePath, 'src', components[key])
})

module.exports = merge(webpackBaseConfig, {
    devtool: 'source-map',
    mode: "production",
    entry: entries,
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '/lib/',
        filename: '[name].js',
        chunkFilename: '[id].js',
        library: 'frosted-glass-ui',
        libraryTarget: 'umd',
        libraryExport: 'default'
        // umdNamedDefine: true
    },
    externals: {
        vue: {
            root: "Vue",   //通过 script 标签引入，此时全局变量中可以访问的是 Vue
            commonjs: "vue",  //可以将vue作为一个 CommonJS 模块访问
            commonjs2: "vue",  //和上面的类似，但导出的是 module.exports.default
            amd: "vue"   //类似于 commonjs，但使用 AMD 模块系统
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ]
});