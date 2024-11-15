"use client";
import Image from "next/image";
import ProductList from "../components/ProductList";
import { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Shop() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        <ProductList tags={["EVERYTHING"]} limit={12} />
      </div>
      <Footer />
    </div>
  );
}
