"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  { id: "1", name: "Purfium Classic", price: 49.99, image: "/3.jpg" },
  { id: "2", name: "Purfium Rose", price: 59.99, image: "/4.jpg" },
  { id: "3", name: "Purfium Luxury", price: 69.99, image: "/22.jpg" },
  { id: "4", name: "Purfium Gold", price: 79.99, image: "/d1.jpg" },
  { id: "5", name: "Purfium Night", price: 89.99, image: "/17.jpg" },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-tr from-gray-300 via-white to-gray-400 min-h-screen">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-10">
          Our Perfume Collection
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="rounded-lg"
              />

              <h2 className="text-xl font-semibold mt-4">
                {product.name}
              </h2>

              <p className="text-lg font-bold mt-2">
                ${product.price}
              </p>

              <Link href={`/products/${product.id}`}>
                <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}