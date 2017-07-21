var path = require('path');



module.exports = {
    context: path.resolve('js'),
    entry: ["./utils.js", "./app.js"],
    output: {
        path: path.resolve(__dirname, '/build/js/'),
        publicPath: '/public/assets/js/',
        filename: "bundle.js"
    },
    devServer: {
        contentBase: 'public'
    },
    module: {
        loaders: [
            {//jshint settings
                test: /\.js$/, //regex that determines what kind of files to run through loader
                exclude: /node_modules/, //exclude any and all files in the node_modules folder
                loader: 'jshint-loader',
                enforce: 'pre'
            },
            {//babel settings
                test: /\.es6$/, //regex that determines what kind of files to run through loader
                exclude: /node_modules/, //exclude any and all files in the node_modules folder
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    },
    //watch: true
};