const path = require('path');

module.exports = {
    mode: 'development',
    entry: './_/api-worker/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'api-worker.bundle.js',
    },
};