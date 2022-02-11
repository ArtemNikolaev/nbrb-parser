const fetchJSON = require('../utils/fetchJSON');
const { CURRENCIES } = require('./api');
const currenciesMapper = require('../mappers/currency');

module.exports = () => fetchJSON(CURRENCIES).then(currenciesMapper);