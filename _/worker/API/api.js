const baseUrl = 'https://www.nbrb.by/api/'

module.exports = {
    CURRENCIES: () => `${baseUrl}exrates/currencies`,
    RATES: (id, periodicity, ondate, parammode) => {
        const url = new URL(`${baseUrl}+exrates/rates${id ? `/${id}`: ''}`);

        if (periodicity) url.searchParams.set('periodicity', periodicity);
        if (ondate) url.searchParams.set('ondate', ondate);
        if (parammode) url.searchParams.set('parammode', parammode);

        return url.toString();
    }
}