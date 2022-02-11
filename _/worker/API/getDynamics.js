const fetchJSON = require('../utils/fetchJSON');
const { DYNAMICS } = require('./api');

module.exports =
    ({id, startdate, enddate} = {id: undefined, startdate: undefined, enddate: undefined}) => {
        if (!id || !startdate || !enddate) {
            return Promise.reject('nbrb fetch: dynamics: id, startdate, enddate should be defined');
        }

        return fetchJSON(`${DYNAMICS}/${id}?startdate=${startdate}&enddate=${enddate}`);
    }
