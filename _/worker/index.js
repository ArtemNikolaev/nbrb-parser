const msgMapper = require('./mappers/msgMapper');

msgMapper.getCurrencies()
    .then(payload => ({ msg: 'currencies', payload}))
    .then(postMessage);

msgMapper.getRates()
    .then(payload => ({ msg: 'rates', payload}))
    .then(postMessage);

msgMapper.getDynamics(190, '2016-6-1', '2016-6-30')
    .then(payload => ({ msg: 'dynamics', payload}))
    .then(postMessage);

addEventListener('message', ({data}) => {
    console.log('worker: message received', data);

    postMessage('hello frontend');
});