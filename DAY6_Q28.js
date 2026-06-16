function fetchWeather(callback) {
    setTimeout(() => {
        callback({
            city: "Delhi",
            temp: 35
        });
    }, 2000);
}

fetchWeather((data) => {
    console.log(data);
});