var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: './build' ,
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'autoprefixer', 'sass']
            }
        ]
    }
};