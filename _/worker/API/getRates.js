const fetchJSON = require('../utils/fetchJSON');
const { RATES } = require('./api');

module.exports =
    (id, ondate, periodicity = 0, parammode = 2) => {
            const url = new URL(
                `${RATES}${id ? `/${id}`: ''}`
            );

            if (Number.isInteger(periodicity)) url.searchParams.set('periodicity', periodicity);
            if (ondate) url.searchParams.set('ondate', ondate);
            if (Number.isInteger(parammode)) url.searchParams.set('parammode', parammode);

            return fetchJSON(url.toString());
    }
