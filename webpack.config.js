'use strict';
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
module.exports = {
    //入口
    entry: {
        main: './src/main.js'
    },
    output: {
        path: __dirname + '/dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /.css$/,
            loader: 'style-loader!css-loader!autoprefixer-loader'
        }, {
            test: /.less$/,
            loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
        }, {
            test: /.(jpg|png|ttf|svg|bmp|gif)$/,
            loader: 'url-loader?limit=4096',
        }, {
            test: /.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015'],
                plugins: ['transform-runtime']
            }
        }, {
            test: /.vue$/,
            loader: 'vue-loader', //vue-loader 依赖vue-template-compiler
        }]
    },
    plugins: [new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        //处理vue开发环境的提示，告知vue当前是生产环境
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: '"production"'
        //     }
        // })
    ]
}
