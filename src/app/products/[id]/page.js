"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Import useRouter for navigation
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter(); // Initialize the useRouter hook
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/candles.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedProduct = data.find(
          (item) => item.id === parseInt(params.id)
        );
        setProduct(selectedProduct);
      })
      .catch((error) => console.error("Error loading product data:", error));
  }, [params.id]);

  if (!product) return <p>Loading...</p>;

  // Function to handle adding the product to the cart and redirecting to the cart page
  function cartBtnHandler() {
    // Get existing cart from localStorage or initialize as empty
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    // Check if the product is already in the cart
    const existingProductIndex = existingCart.findIndex((item) => item.id === product.id);
    if (existingProductIndex > -1) {
      // If the product already exists, increase the quantity
      existingCart[existingProductIndex].quantity += 1;
    } else {
      // Otherwise, add the product to the cart with a quantity of 1
      existingCart.push({ ...product, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    // Redirect to the cart page after adding the item
    router.push("/cart");
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10">
        <div className="flex flex-row items-center p-24">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
          />
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
            <p className="text-gray-600 mt-2 mx-48 text-center">
              {product.description}
            </p>
            <p className="text-lg font-semibold text-[#6f4f28] mt-4">
              {product.price}
            </p>
            <button
              onClick={cartBtnHandler}
              className="mt-8 px-6 py-3 pt-4 outline rounded-xl"
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
          <p>No reviews yet. Coming Soon!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
