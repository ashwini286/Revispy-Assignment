// src/VerifyEmail.js
import { useState } from "react";

function VerifyEmail() {
  const [otp, setOtp] = useState(Array(8).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move focus to the next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered OTP: ${otp.join("")}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Verify your email</h2>
        <p className="text-sm text-center text-gray-600">
          Enter the 8 digit code you have received on <br />
          <span className="font-medium">dev***@revispy.com</span>
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex justify-center gap-2">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                className="w-12 h-12 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-black rounded-md hover:bg-gray-800"
          >
            VERIFY
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail;
