"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use the `useParams` hook for async params
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ProductPage() {
  const params = useParams();
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

  function cartBtnHandler() {
    // Handle cart logic here
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
            </p>{" "}
            <p className="text-lg font-semibold text-[#6f4f28] mt-4">
              {product.price}
            </p>
            <button
              onClick={cartBtnHandler}
              className=" mt-8 px-6 py-3 pt-4 outline rounded-xl"
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-4 -center">
            Customer Reviews
          </h2>
          <p>No reviews yet. Coming Soon!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
