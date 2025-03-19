const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),  // Explicit path
    output: {
        filename: 'chat-sdk.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'ChatSDK',
        libraryTarget: 'umd',   // UMD export format
        globalObject: 'this'    // Ensure compatibility in different environments
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};
