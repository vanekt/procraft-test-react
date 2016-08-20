var webpack = require('webpack'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    WebpackUglifyJsPlugin = require('webpack-uglify-js-plugin'),
    extractCSS = new ExtractTextPlugin('styles.css');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: './build' ,
        filename: 'app.bundle.js'
    },
    debug: false,
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeScriptTypeAttributes: true
            }
        }),
        new CopyWebpackPlugin([
            { 
                from: 'src/**/*.json', 
                to: 'json', 
                flatten: true 
            },
            { 
                context: 'src/components', 
                from: '**/*.png', 
                to: 'assets' 
            }
        ]),
        new WebpackUglifyJsPlugin({
            cacheFolder: path.resolve(__dirname, 'tmp/cached_uglify/'),
            debug: false,
            minimize: true,
            sourceMap: false,
            output: {
                comments: false
            },
            compressor: {
                warnings: false
            }
        }),
        extractCSS,
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
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
                test: /\.scss$/i,
                loader: extractCSS.extract(['css', 'postcss', 'sass'])
            }
        ]
    },
    postcss: function () {
        return [
            autoprefixer,
            cssnano({
                zindex: false
            })
        ];
    }
};