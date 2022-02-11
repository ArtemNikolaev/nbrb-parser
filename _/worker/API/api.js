const baseUrl = 'https://www.nbrb.by/api/'

module.exports = {
    CURRENCIES: `${baseUrl}exrates/currencies`,
    RATES: (id, periodicity = 0, ondate, parammode =2) => {
        const url = new URL(`${baseUrl}exrates/rates${id ? `/${id}`: ''}`);

        if (Number.isInteger(periodicity)) url.searchParams.set('periodicity', periodicity);
        if (ondate) url.searchParams.set('ondate', ondate);
        if (Number.isInteger(parammode)) url.searchParams.set('parammode', parammode);

        return url.toString();
    }
}