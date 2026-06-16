function calculator(a, b, operation) {
    return operation(a, b);
}

console.log(calculator(20, 10, (a, b) => a + b));
console.log(calculator(20, 10, (a, b) => a - b));
console.log(calculator(20, 10, (a, b) => a * b));