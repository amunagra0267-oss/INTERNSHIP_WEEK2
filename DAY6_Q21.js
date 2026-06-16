function login(cb) {
    setTimeout(() => {
        console.log("Login");

        cb();
    }, 1000);
}

function getUser(cb) {
    setTimeout(() => {
        console.log("Get User");

        cb();
    }, 1000);
}

function getOrders(cb) {
    setTimeout(() => {
        console.log("Get Orders");

        cb();
    }, 1000);
}

login(() => {
    getUser(() => {
        getOrders(() => {
            console.log("Show Orders");
        });
    });
});