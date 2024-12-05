"use client"; 

import React, { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar"; // Adjust the path to your Navbar component
import Footer from "@/app/components/Footer"; // Adjust the path to your Footer component

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutMessage, setCheckoutMessage] = useState("");

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    // Calculate total price whenever cart items change
    const total = cartItems.reduce((acc, item) => {
      const priceString = item.price.replace(/[^0-9.]/g, ""); // Remove non-numeric characters
      const price = parseFloat(priceString);

      // Check if price is valid
      if (isNaN(price)) {
        console.error(`Invalid price for item ${item.name}:`, priceString);
        return acc; // Skip this item if price is invalid
      }

      return acc + price * item.quantity;
    }, 0);

    setTotalPrice(total.toFixed(2));
  }, [cartItems]);

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const updateQuantity = (itemId, quantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: parseInt(quantity, 10) };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleCheckout = () => {
    console.log("Checkout clicked");

    // Set the checkout message
    setCheckoutMessage("Thank you for shopping with us!! 🎉");

    // Clear cart and remove from localStorage
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <div className="cart-container bg-gray-100 py-0">
      <Navbar />
      <div className="container mx-auto px-4 mb-32">
        <h1 className="text-4xl font-bold text-center text-black mb-6">Your Cart</h1>
        {cartItems.length === 0 ? (
          <div>
            {/* Display a message when the cart is empty or after checkout */}
            {checkoutMessage ? (
              <p className="text-center text-lg text-green-600">{checkoutMessage}</p>
            ) : (
              <p className="text-center text-lg text-black">Your cart is empty.</p>
            )}
          </div>
        ) : (
          <div>
            <div className="cart-items bg-white rounded-lg shadow-lg p-6 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item flex items-center justify-between py-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                      <span className="text-sm text-gray-500">Price: {item.price}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <select
                      className="border rounded-md p-2"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, e.target.value)}
                    >
                      {[...Array(10)].map((_, index) => (
                        <option key={index + 1} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary bg-white rounded-lg shadow-lg p-6 mt-6">
              <div className="flex justify-between mb-4">
                <span className="text-xl font-semibold text-gray-800">Total Price:</span>
                <span className="text-xl font-semibold text-gray-900">${totalPrice}</span>
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleCheckout}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
                >
                  Checkout
                </button>
                <button
                  onClick={() => window.history.back()}
                  className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-300 transform hover:scale-105"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
