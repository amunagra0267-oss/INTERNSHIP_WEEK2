let state = 0;

setInterval(() => {
    if (state === 0) {
        console.log("Red");
    } else if (state === 1) {
        console.log("Yellow");
    } else {
        console.log("Green");
    }

    state = (state + 1) % 3;
}, 2000);