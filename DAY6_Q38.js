console.log("Start");

for (let i = 0; i < 1000000000; i++) {}

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");