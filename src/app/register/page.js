"use client";
import React, { useState } from 'react';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setSuccessMessage('Registration successful');
    setError('');
  };

  return (
    <div className="container">
      <div className="left">
        <img src="img/login.jpg" alt="Candles on a wooden surface" />
      </div>
      <div className="logo">
        <img src="img/logo.png" alt="Scent Sanctuary Logo" />
      </div>
      <div className="right">
        <h1>Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <button type="submit">Register</button>
        </form>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-family: Arial, sans-serif;
          background-color: #DEDDCA;
          padding: 20px;
          box-sizing: border-box;
          max-width: 100%;
          overflow: hidden;
        }
        .logo {
          position: absolute;
          top: 20px;
          left: 74%;
          transform: translateX(-50%);
          z-index: 10;
        }
        .logo img {
          max-width: 120px;
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
          text-align: center;
          margin-top: 90px;
        }
        .right h1 {
          font-size: 24px;
          margin-bottom: 20px;
        }
        .right form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .right label {
          margin-bottom: 5px;
        }
        .right input {
          margin-bottom: 15px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          width: 80%;
        }
        .right button {
          padding: 10px;
          background-color: #641414;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          width: 80%;
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

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            height: auto;
            justify-content: flex-start;
            padding-top: 50px;
          }
          .logo {
            left: 50%;
            transform: translateX(-50%);
          }
          .left {
            display: none;
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
  );
}

export default Register;
