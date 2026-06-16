function verifyOTP(inputOTP, callback) {
    const otp = "1234";

    if (inputOTP === otp) {
        callback(true);
    } else {
        callback(false);
    }
}

verifyOTP("1234", (result) => {
    console.log(result ? "OTP Verified" : "Invalid OTP");
});