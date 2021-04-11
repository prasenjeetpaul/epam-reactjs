const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
    mode: env.production ? 'production' : 'development',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', '.png', '.jpg', '.jpeg', 'gif']
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                exclude: /node_modules/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: path.join(__dirname, 'src', 'index.html')
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        compress: true,
        port: 9000,
        hot: true
    }
});