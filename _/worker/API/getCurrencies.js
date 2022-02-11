const fetchJSON = require('../utils/fetchJSON');
const currenciesUrl = require('./api').CURRENCIES();
const currenciesMapper = require('../mappers/currency');

module.exports = () => fetchJSON(currenciesUrl).then(currenciesMapper);