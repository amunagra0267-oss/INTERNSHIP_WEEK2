for (let i = 5; i >= 1; i--) {
    setTimeout(() => {
        console.log(i);
    }, (5 - i) * 1000);
}

setTimeout(() => {
    console.log("Boom");
}, 5000);