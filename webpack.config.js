module.exports = {
    entry: ["./utils.js", "./app.js"],
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {//babel settings
                test: /\.es6$/, //regex that determines what kind of files to run through loader
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
    //watch: true
};