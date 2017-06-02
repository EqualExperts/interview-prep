config = {
    entry: "./assets/js/index.js",
    output: {
        path: __dirname + "/build",
        publicPath: "js",
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};

module.exports = config;