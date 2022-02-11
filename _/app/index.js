const worker = new Worker('./web-worker.bundle.js');

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
        default:
            console.log('frontend: message received: ', data)
    }
})

worker.postMessage('hello, worker');
