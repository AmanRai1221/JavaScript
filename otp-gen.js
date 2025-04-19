function generateOTP(length){
    let otp = '';
    for(let i=0; i<length; i++){
        otp += Math.floor(Math.random() * 10); // Generate a random digit (0-9)
    }
    return otp;
}

console.log(generateOTP(4)); // Example usage: generates a 4-digit OTP
