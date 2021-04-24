const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
    name: 'client',
    target: 'web',
    entry: [
        isDevMod && 'webpack-hot-middleware/client',
        './src/client.jsx',
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                include: /src/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
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

    plugins: [isDevMod && new webpack.HotModuleReplacementPlugin()].filter(Boolean),
});
