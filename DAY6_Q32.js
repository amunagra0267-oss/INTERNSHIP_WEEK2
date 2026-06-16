let seconds = 0;
let timer;

function start() {
    timer = setInterval(() => {
        seconds++;
        console.log(seconds);
    }, 1000);
}

function pause() {
    clearInterval(timer);
}

function reset() {
    clearInterval(timer);
    seconds = 0;
}

start();