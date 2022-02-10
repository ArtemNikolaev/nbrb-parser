const fetchJSON = require('../utils/fetchJSON');
const { CURRENCIES } = require('./api');
const currenciesMapper = require('../mappers/currencies');

module.exports = () => fetchJSON(CURRENCIES).then(currenciesMapper);