const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
    name: 'server',
    target: 'node',
    entry: './src/serverRenderer.js',
    externals: [nodeExternals()],
    output: {
        filename: 'js/serverRenderer.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                include: /src/,
                exclude: /node_modules/,
                use: ['ignore-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                include: /src/,
                exclude: /node_modules/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        publicPath: '/assets/img/',
                        outputPath: '/assets/img/',
                    }
                }],
            }
        ],
    },
});
