function randomTask(name, callback) {
    const delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
        console.log(name);
        callback && callback();
    }, delay);
}

randomTask("A", () => {
    randomTask("B", () => {
        randomTask("C");
    });
});