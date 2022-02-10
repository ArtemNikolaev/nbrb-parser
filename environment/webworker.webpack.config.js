const path = require('path');

module.exports = {
    mode: 'development',
    entry: './_/worker/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'web-worker.js',
    },
};