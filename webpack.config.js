var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: './build' ,
        filename: 'app.bundle.js'
    },
    devtool: 'source-map',
    debug: true,
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new CopyWebpackPlugin([
            { from: 'src/**/*.json', to: 'json', flatten: true },
            { context: 'src/components', from: '**/*.png', to: 'img' }
        ])
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
                loaders: ['style', 'css?sourceMap', 'autoprefixer', 'sass?sourceMap']
            }
        ]
    }
};