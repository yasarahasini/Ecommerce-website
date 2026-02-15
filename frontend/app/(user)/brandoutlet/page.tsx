"use client";

import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

const dummyProducts: Product[] = [
  { id: 1, name: "Classic Sneakers", price: 79.99, img: "/products/sneaker1.jpg" },
  { id: 2, name: "Sport Watch", price: 149.99, img: "/products/watch1.jpg" },
  { id: 3, name: "Leather Jacket", price: 299.99, img: "/products/jacket1.jpg" },
  { id: 4, name: "Denim Jeans", price: 89.99, img: "/products/jeans1.jpg" },
  { id: 5, name: "Sunglasses", price: 49.99, img: "/products/sunglasses1.jpg" },
];

const BrandPage: React.FC = () => {
  const router = useRouter();
  const { brand } = router.query;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{brand} Outlet</h1>
        <p className="text-gray-600 mt-2">
          Explore exclusive deals on {brand} products
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-60">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-700 mt-2">${product.price.toFixed(2)}</p>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BrandPage;
