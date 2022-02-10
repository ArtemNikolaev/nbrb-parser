const span = document.createElement('span');
span.innerText = 'bla';
document.body.append(span);

const worker = new Worker('./web-worker.bundle.js');

worker.addEventListener('message', ({data}) => {
    switch (data.msg) {
        case 'currencies':
            console.table(data.payload);
            break;
        default:
            console.log('frontend: message received: ', data)
    }
})

worker.postMessage('hello, worker');
