const webworker = require('./environment/webworker.webpack.config.js');
const app = require('./environment/app.webpack.config');

module.exports = [
    webworker,
    app,
];
