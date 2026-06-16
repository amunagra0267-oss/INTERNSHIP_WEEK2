const images = [
    "Image 1",
    "Image 2",
    "Image 3"
];

let index = 0;

setInterval(() => {
    console.log(images[index]);

    index = (index + 1) % images.length;
}, 3000);