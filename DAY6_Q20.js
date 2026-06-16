function wait(seconds, callback) {
    setTimeout(callback, seconds * 1000);
}

wait(3, () => {
    console.log("Finished Waiting");
});