// src/components/Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="flex items-center justify-center pt-4 bg-gray-100 h-screen  " >

    <div className="flex flex-col items-center w-full max-w-md p-8 space-y-2 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <h3 className="text-md font-medium mb-1">Welcome back to ECOMMERCE</h3>
      <p className="text-gray-500 mb-4">The next gen business marketplace</p>

      <form className="w-full" onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500 pt-6"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200"
        >
          LOGIN
        </button>
      </form>

      <div className="mt-4 text-sm text-gray-500">
        Don't have an Account? <Link to="/create-account" className="text-black font-semibold">SIGN UP</Link>
      </div>
    </div>
    </div>
  );
};

export default Login;
