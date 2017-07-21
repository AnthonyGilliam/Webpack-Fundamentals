var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config');
var prodConfig = devConfig;

var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: WebpackStrip.loader('console.log, perfLog')
};

prodConfig.module.loaders.push(stripLoader);

module.exports = prodConfig;