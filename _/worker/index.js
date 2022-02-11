const msgMapper = require('./mappers/msgMapper');

msgMapper.currencies()
    .then(payload => ({ msg: 'currencies', payload}))
    .then(postMessage);

addEventListener('message', ({data}) => {
    if (!msgMapper[data.msg]) {
        return postMessage({msg: 'error', payload: `'${data.msg}' type doesn't exists`});
    }

    msgMapper[data.msg](data.payload)
        .then(payload => ({msg: data.msg, payload}))
        .catch(payload => ({msg: 'error', payload}))
        .then(postMessage);
});
