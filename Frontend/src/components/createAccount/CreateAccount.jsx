import { Link,useNavigate  } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    if (!name || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    // API request to register the user
    axios.post("http://localhost:8000/api/auth/register", { name, email, password })
    .then((response) => {
      alert("Registration successful!");
      navigate("/login");
    })
    .catch((error) => {
      console.error('Error:', error);
      alert("Registration failed. Please check your network or server.");
    });
  };

  return (
    <div className="flex items-center justify-center pt-4 bg-gray-100 h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Create your account</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
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
