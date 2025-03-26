'use client';
import { useState } from 'react';

export default function OtpVerification() {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold">We sent you a code</h2>
        <p className="text-gray-400 mt-2">Please enter it below to verify your email</p>
        <p className="text-blue-400 mt-2">johndoe@gmail.com</p>

        <div className="flex justify-center gap-2 mt-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center text-2xl bg-gray-700 border border-gray-600 rounded-md focus:border-blue-500 focus:outline-none"
            />
          ))}
        </div>

        <p className="text-gray-400 mt-4">
          Didn't receive the code? <a href="#" className="text-blue-400 hover:underline">Send Again</a>
        </p>
      </div>
    </div>
  );
}
