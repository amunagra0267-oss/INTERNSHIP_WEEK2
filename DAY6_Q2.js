function calculate(a, b, callback) {
    return callback(a, b);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));