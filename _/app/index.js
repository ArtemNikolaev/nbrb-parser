const worker = new Worker('./api-worker.bundle.js');

worker.addEventListener('message', ({data}) => {
    switch (data.msg) {
        case 'currencies':
            console.log('all currencies', data.payload);
            break;
        case 'rates':
            console.log('rates', data.payload);
            break;
        case 'dynamics':
            console.log('dynamics', data.payload);
            break;
        case 'error':
            console.error('error', data.payload);
            break;
        default:
            console.log('frontend: message received: ', data)
    }
})

worker.postMessage({ msg: 'not exist'});
worker.postMessage({msg: 'rates'});
worker.postMessage({msg: 'dynamics'});
worker.postMessage({msg: 'dynamics', payload: {id:190, startdate:'2016-6-1', enddate:'2016-6-30'}});
