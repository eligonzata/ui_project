"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Account() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Hardcoded user credentials
  const hardcodedUser = {
    email: "test@example.com",
    password: "password123",
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if both email and password are entered
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    // Check if email and password match the hardcoded credentials
    if (email === hardcodedUser.email && password === hardcodedUser.password) {
      setSuccessMessage("Login successful");
      setError(""); // Clear any previous error messages
    } else {
      setError("Invalid email or password");
      setSuccessMessage(""); // Clear any previous success message
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="left">
          <img src="img/login.jpg" alt="Candles on a wooden surface" />
        </div>
        <div className="logo pt-24">
          <img src="img/logo.png" alt="Scent Sanctuary Logo" />
        </div>
        <div className="right">
          <h1>Welcome to Scent Sanctuary</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
            />

            {error && <p className="error-message">{error}</p>}
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}

            <button type="submit">Login</button>

            {/* Forgot Password and Register links */}
            <div className="links">
              <a href="/forgot-password" className="forgot-password">
                Forgot Password?
              </a>
              <a href="/register" className="register">
                Create an Account
              </a>
            </div>
          </form>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
            background-color: #deddca; /* Updated background color */
            padding: 20px;
            box-sizing: border-box;
            max-width: 100%;
            overflow: hidden;
          }
          .logo {
            position: absolute;
            top: 20px; /* Adjust positioning of the logo */
            left: 74%;
            transform: translateX(-50%);
            z-index: 10; /* Make sure the logo is above the content */
          }
          .logo img {
            max-width: 120px; /* Adjust size of the logo */
            height: auto;
          }
          .left {
            position: relative;
            flex: 1;
            height: 100vh;
            min-width: 50%;
          }
          .left img {
            position: absolute;
            top: 0;
            left: -10%;
            width: 120%;
            height: 100%;
            object-fit: cover;
          }
          .right {
            flex: 1;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 20px;
            box-sizing: border-box;
            text-align: center; /* Center content inside right section */
          }
          .right h1 {
            font-size: 24px;
            margin-bottom: 20px;
          }
          .right form {
            display: flex;
            flex-direction: column;
            align-items: center; /* Center form content */
          }
          .right label {
            margin-bottom: 5px;
          }
          .right input {
            margin-bottom: 15px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 80%; /* Make input fields responsive */
          }
          .right button {
            padding: 10px;
            background-color: #641414;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 80%; /* Make button responsive */
          }
          .right button:hover {
            background-color: #555;
          }
          .error-message {
            color: red;
            margin-bottom: 10px;
          }
          .success-message {
            color: green;
            margin-bottom: 10px;
          }

          .links {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 15px;
          }

          .links a {
            color: #333;
            text-decoration: none;
            margin-top: 10px;
          }

          .links a:hover {
            text-decoration: underline;
          }

          .forgot-password {
            color: #007bff;
          }

          .register {
            color: #28a745;
          }

          @media (max-width: 768px) {
            .container {
              flex-direction: column;
              height: auto;
              justify-content: flex-start;
              padding-top: 50px; /* Added padding to prevent overlap */
            }
            .logo {
              left: 50%;
              transform: translateX(-50%);
            }
            .left {
              display: none; /* Hide the image on mobile */
            }
            .left img {
              object-fit: cover;
              width: 100%;
              height: 100%;
              left: 0; /* For mobile responsiveness */
            }
            .right h1 {
              font-size: 20px;
            }
            .right form {
              width: 100%;
            }
            .right input {
              width: 100%;
            }
            .right button {
              width: 100%;
            }
          }
        `}</style>
      </div>
      <Footer />
    </div>
  );
}

export default Account;
