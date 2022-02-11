function currenciesMapper(currencies) {
    return currencies.map(currencyMapper);
}

function currencyMapper(currency) {
    const {
        Cur_ID: id,
        Cur_Code: code,
        Cur_Abbreviation: abbr,
        Cur_Name: name,
        Cur_Name_Eng: nameEng,
        Cur_Scale: scale,
    } = currency;
    return {
        id, code, abbr, name, nameEng, scale,
    };
}

module.exports = (data) =>
    Array.isArray(data) ?
        currenciesMapper(data) :
        currencyMapper(data);
