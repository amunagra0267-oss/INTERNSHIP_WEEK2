function downloadFile(callback) {
    console.log("Downloading...");

    setTimeout(() => {
        console.log("File Downloaded");
        callback();
    }, 2000);
}

downloadFile(() => {
    console.log("Processing File");
});