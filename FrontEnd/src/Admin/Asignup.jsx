import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the eye icons from react-icons

const Asignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { name, email, password };

    axios
      .post("http://localhost:4000/asignup", payload)
      .then((result) => {
        alert('Account created');
        console.log(result);
        navigate('/alogin');
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to create an account");
      });
  };

  let formHandle1 = (e) => {
    e.preventDefault();
    navigate("/alogin");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-800 to-purple-500">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-xl overflow-hidden relative">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-900">Admin Registration</h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
              placeholder="Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type={passwordVisible ? "text" : "password"} // Toggle the type based on the passwordVisible state
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
              placeholder="Password"
            />
            <span
              className="absolute inset-y-0 top-7 right-0 pr-3 flex items-center text-gray-500 cursor-pointer"
              onClick={() => setPasswordVisible(!passwordVisible)} // Toggle the password visibility
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />} {/* Show the appropriate icon */}
            </span>
          </div>

          <div>
          <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.75rem",
                background: "linear-gradient(to right, violet, blue)",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1rem",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.target.style.background = "linear-gradient(to right, blue, violet)")
              }
              onMouseLeave={(e) =>
                (e.target.style.background = "linear-gradient(to right, violet, blue)")
              }
            >
              SignUp
            </button>
          </div>

          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <button
              onClick={formHandle1}
              className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              
              Login
            </button>
          </p>
        </form>

        
      </div>
    </div>
  );
};

export default Asignup;
