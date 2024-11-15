import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductList({ tags = [], limit = 10 }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/candles.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data
          .filter((product) => tags.some((tag) => product.tags.includes(tag)))
          .slice(0, limit);
        setProducts(filteredData);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, [tags, limit]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <div className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer max-h-96 min-h-96">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="mx-auto rounded-md"
            />
            <h3 className="text-xl font-bold mt-4">{product.name}</h3>
            <p className="text-gray-600">{product.blurb}</p>{" "}
            {/* Display blurb here */}
            <p className="text-[#6f4f28] font-semibold">{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
