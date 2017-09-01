var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION
    ?   [   './src/components/index.js',
            'whatwg-fetch'
        ]
    :   [
            './src/components/index.js',
            'whatwg-fetch',
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080'
        ];

var plugins = PRODUCTION
    ?   [   new CopyWebpackPlugin([
                {from: './src/css/', to: './css/'},
                {from: './src/fonts/', to: './fonts/'},
                {from: './src/js/', to: './js/'}])
        ]
    :   [   new CopyWebpackPlugin([
                {from: './src/css/', to: './css/'},
                {from: './src/fonts/', to: './fonts/'},
                {from: './src/js/', to: './js/'}]),
            new webpack.HotModuleReplacementPlugin()
        ];

module.exports = {
    entry: entry,
    plugins: plugins,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'stage-0']
                }
            }//,
            // {
            //     test: /\.js$/,
            //     loader: 'eslint-loader',
            //     exclude: '/node_modules/'
            // }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'js/bundle.js'
    }
}
