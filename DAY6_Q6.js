function registerUser(callback) {
    console.log("Registering User...");

    setTimeout(() => {
        console.log("Registration Successful");
        callback();
    }, 1000);
}

function sendWelcomeEmail() {
    console.log("Welcome Email Sent");
}

registerUser(sendWelcomeEmail);