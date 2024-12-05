"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const Register = () => {
  const [errorMessage, setErrorMessage] = useState(""); // For handling error messages
  const [successMessage, setSuccessMessage] = useState(""); // For handling success messages
  const [formData, setFormData] = useState({ // State for managing form data
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false); // Loading state
  const router = useRouter(); // Initialize useRouter

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading

    try {
      // Send data to the backend
      const response = await fetch("https://2dfe-66-25-161-126.ngrok-free.app/register_app/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      // Log the response status and body for debugging
      console.log("Response status:", response.status);
      const data = await response.json(); // Parse JSON response from backend
      console.log("Backend response:", data);

      // Check if the response is successful
      if (response.ok && data.success) {
        setSuccessMessage(data.message); // Display success message from backend
        setErrorMessage(""); // Clear any previous error messages

        // Redirect to the login page after successful registration
        setTimeout(() => {
          router.push("/account"); // Use the router to navigate to the login page
        }, 2000); // Wait for 2 seconds to show success message before redirect
      } else {
        // Handle unsuccessful response
        console.error("Error:", data);
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setSuccessMessage(""); // Clear success message if there's an error
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while registering. Please try again later.");
      setSuccessMessage(""); // Clear success message if there's an error
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="left">
          <img src="/img/login.jpg" alt="Image" />
        </div>
        <div className="logo pt-24">
          <img src="img/logo.png" alt="Scent Sanctuary Logo" />
        </div>
        <div className="right">
          <h1>Create an Account</h1>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}
          <form id="registerForm" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
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
      <Footer />
    </div>
  );
}

export default Register;
