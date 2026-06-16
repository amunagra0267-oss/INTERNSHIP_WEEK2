function fetchUser(callback) {
    setTimeout(() => {
        const user = {
            id: 1,
            name: "Ram"
        };

        callback(user);
    }, 3000);
}

fetchUser((user) => {
    console.log(user);
});