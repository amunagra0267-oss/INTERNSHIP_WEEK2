function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback(name);
}

function welcome(name) {
    console.log(`Welcome ${name}`);
}

greetUser("Ram", welcome);