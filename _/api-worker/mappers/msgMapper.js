const getCurrencies = require('../API/getCurrencies');
const getRates = require('../API/getRates');
const getDynamics = require('../API/getDynamics');

module.exports = {
    currencies: getCurrencies,
    rates: getRates,
    dynamics: getDynamics,
}