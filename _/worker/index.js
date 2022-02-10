addEventListener('message', ({data}) => {
    console.log('worker: message received', data);

    postMessage('hello frontend');
});