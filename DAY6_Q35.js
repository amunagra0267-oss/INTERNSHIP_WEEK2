const text = "Hello World";
let i = 0;

const typing = setInterval(() => {
    process.stdout.write(text[i]);

    i++;

    if (i === text.length) {
        clearInterval(typing);
    }
}, 200);