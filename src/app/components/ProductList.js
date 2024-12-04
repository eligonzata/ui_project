import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductList({ search = "", tags = [], limit = 60 }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/candles.json")
      .then((response) => response.json())
      .then((data) => {
        // Filter by tags
        const filteredByTags = tags.includes("EVERYTHING")
          ? data
          : data.filter((product) => tags.some((tag) => product.tags.includes(tag)));

        // Filter by search term
        const filteredBySearch = filteredByTags.filter((product) =>
          product.name.toLowerCase().includes(search)
        );

        // Limit the results
        setProducts(filteredBySearch.slice(0, limit));
      })
      .catch((error) => console.error("Error loading data:", error));
  }, [search, tags, limit]);

  return (
    <div
      className={`grid gap-8 p-4 ${
        products.length === 1
          ? "grid-cols-1"
          : products.length === 2
          ? "grid-cols-1 md:grid-cols-2"
          : "grid-cols-1 md:grid-cols-3 2xl:grid-cols-6"
      } justify-center`}
    >
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`} className="bg-white shadow-md rounded-lg p-4 text-center">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="mx-auto rounded-md"
          />
          <h3 className="text-xl font-bold mt-4">{product.name}</h3>
          <p className="text-gray-600">{product.blurb}</p>
          <p className="text-[#6f4f28] font-semibold">{product.price}</p>
        </Link>
      ))}
    </div>
  );
}
