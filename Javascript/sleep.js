/*
An Asynchronous function that takes a positive integer 'millis' as its argument, it returns a promise that resolves 'millis' after 'millis' milliseconds have passed using the setTimeout function. 
 */ 

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

async function example(millis) {
    console.log('Start');
    await sleep(millis);
    console.log('I slept for ' + millis/1000 + ' seconds!');
}

example(5000);
