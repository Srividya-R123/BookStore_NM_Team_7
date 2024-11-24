import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons

const Ssignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { name, email, password };

    axios
      .post("http://localhost:4000/ssignup", payload)
      .then((result) => {
        alert("Account created");
        console.log(result);
        navigate("/slogin");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to create an account");
      });
  };

  const formHandle1 = (e) => {
    e.preventDefault();
    navigate("/slogin");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, violet, blue)",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "400px",
          position: "relative",
        }}
      >
        {/* Background Decoration */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom right, blue, violet)",
            transform: "skewY(-6deg)",
            zIndex: -1,
            borderRadius: "15px",
          }}
        ></div>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", color: "#333" }}>
            Seller Registration
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="name"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontSize: "0.875rem",
                color: "#555",
              }}
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "1rem",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontSize: "0.875rem",
                color: "#555",
              }}
            >
              Email Address
            </label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "1rem",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: "1.5rem", position: "relative" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontSize: "0.875rem",
                color: "#555",
              }}
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "1rem",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1.2rem",
                color: "#888",
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Render Eye or Slash */}
            </button>
          </div>

          {/* Signup Button */}
          <div style={{ marginBottom: "1rem" }}>
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
              Signup
            </button>
          </div>

          {/* Redirect to Login */}
          <p style={{ textAlign: "center", fontSize: "0.875rem", color: "#555" }}>
            Already have an account?{" "}
            <button
              onClick={formHandle1}
              style={{
                background: "none",
                border: "none",
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Ssignup;
