const currencyMapper = require('./currency');

module.exports = (currencies) => currencies.map(currencyMapper);