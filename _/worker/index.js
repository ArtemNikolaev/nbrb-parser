const msgMapper = require('./mappers/msgMapper');

msgMapper.getCurrencies()
    .then(payload => ({ msg: 'currencies', payload}))
    .then(postMessage);

msgMapper.getRates().then(payload => ({ msg: 'rates', payload}))
    .then(postMessage);

addEventListener('message', ({data}) => {
    console.log('worker: message received', data);

    postMessage('hello frontend');
});