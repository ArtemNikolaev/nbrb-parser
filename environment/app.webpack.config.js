const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './_/app/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({
        template: '_/app/index.html'
    })],
};