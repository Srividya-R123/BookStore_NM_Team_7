import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Slogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email, password };
    axios
      .post("http://localhost:4000/slogin", payload)
      .then((res) => {
        if (res.data.Status === "Success") {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          navigate("/shome");
          alert("Login successful");
        } else {
          alert("Wrong credentials");
        }
      })
      .catch((err) => console.log(err));
  };

  const formHandle1 = (e) => {
    e.preventDefault();
    navigate("/ssignup");
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
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#333",
          }}
        >
          Seller Login
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
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
              id="email"
              name="email"
              type="email"
              required
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

          {/* Password Input */}
          <div style={{ marginBottom: "1rem" }}>
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
              type="password"
              required
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
          </div>

          {/* Login Button */}
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
              Login
            </button>
          </div>

          {/* Signup Redirect */}
          <p
            style={{
              textAlign: "center",
              fontSize: "0.875rem",
              color: "#555",
            }}
          >
            Don't have an account?{" "}
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
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Slogin;
