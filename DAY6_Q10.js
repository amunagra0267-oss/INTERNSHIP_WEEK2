function login(username, password, callback) {
    if (username === "admin" && password === "123") {
        callback(true);
    } else {
        callback(false);
    }
}

login("admin", "123", (success) => {
    console.log(success ? "Login Success" : "Login Failed");
});