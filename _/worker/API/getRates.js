const fetchJSON = require('../utils/fetchJSON');
const { RATES } = require('./api');

module.exports =
    (id, ondate, periodicity, parammode) =>
        fetchJSON(
            RATES(id, ondate, periodicity, parammode)
        );
