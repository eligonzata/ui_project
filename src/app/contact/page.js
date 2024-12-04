"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="background">
          <div className="overlay"></div>
        </div>
        <div className="form-container">
          <h1>Contact Us</h1>
          <p>
            We would love to hear from you. Please reach out with any questions,
            comments, or just to say hello!
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>

            {status && <p className="status-message">{status}</p>}
            <button type="submit">Send Message</button>
          </form>
        </div>

        <style jsx>{`
          html,
          body {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            overflow-x: hidden; /* Prevent horizontal scrolling */
          }

          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            width: 100%;
            position: relative;
            color: #3b3b3b;
            font-family: "Georgia", serif;
          }

          .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100%;
            background-image: url("img/contact.jpg");
            background-size: cover;
            background-position: center;
            background-attachment: fixed; /* Keeps the image fixed in place */
            filter: brightness(0.6);
            z-index: 1;
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
          }

          .form-container {
            position: relative;
            z-index: 2;
            max-width: 600px;
            padding: 40px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 10px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            text-align: center;
            width: 100%;
          }

          .form-container h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            color: #8a2a2a;
          }

          .form-container p {
            font-size: 1rem;
            color: #666;
            margin-bottom: 20px;
          }

          form {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          label {
            align-self: flex-start;
            font-weight: bold;
            margin-bottom: 5px;
            color: #3b3b3b;
          }

          input,
          textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1rem;
          }

          textarea {
            resize: none;
            height: 100px;
          }

          button {
            width: 100%;
            padding: 12px;
            font-size: 1rem;
            background-color: #8a2a2a;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          button:hover {
            background-color: #641414;
          }

          .status-message {
            color: #28a745;
            font-size: 1rem;
            margin-top: 15px;
          }

          @media (max-width: 768px) {
            .form-container {
              width: 90%;
              padding: 30px;
            }
            .form-container h1 {
              font-size: 2rem;
            }
          }
        `}</style>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
