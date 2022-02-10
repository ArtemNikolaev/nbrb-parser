const getCurrencies = require('./API/getCurrencies');

getCurrencies()
    .then(payload => ({ msg: 'currencies', payload}))
    .then(postMessage);

addEventListener('message', ({data}) => {
    console.log('worker: message received', data);

    postMessage('hello frontend');
});