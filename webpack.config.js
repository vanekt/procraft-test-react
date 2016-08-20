var webpack = require('webpack'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    extractCSS = new ExtractTextPlugin('styles.css');

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
            { context: 'src/components', from: '**/*.png', to: 'assets' }
        ]),
        extractCSS
    ],
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/i,
                loader: extractCSS.extract(['css', 'postcss', 'sass'])
            }
        ]
    },
    postcss: function () {
        return [autoprefixer, cssnano];
    }
};