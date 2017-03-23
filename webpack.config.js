/**
 * Created by fujinliang on 17/3/23.
 */
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    }
};