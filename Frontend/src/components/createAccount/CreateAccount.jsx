import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
function CreateAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegistering ? '/api/auth/register' : '/api/auth/login';
    const payload = isRegistering ? { name, email, password } : { email, password };
    try {
      const { data } = await axios.post(url, payload);
      console.log(data);
    } catch (error) {
      console.error(error.response.data);
    }
  };
    return (
      <div className="flex items-center justify-center pt-4 bg-gray-100  h-screen">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center">Create your account</h2>
  
          <form className="space-y-4"  onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
  
            <button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-black rounded-md hover:bg-gray-800"
            >
              CREATE ACCOUNT
            </button>
          </form>
  
          <p className="text-center text-sm text-gray-600">
            Have an Account?{" "}
            <Link to="/" className="font-medium text-black hover:underline">
              LOGIN
            </Link>
          </p>
        </div>
      </div>
    );
  }
  
  export default CreateAccount;
  