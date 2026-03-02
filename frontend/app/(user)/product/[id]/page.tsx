"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const sells = [
  { id: "1", name: "Purfium Classic", price: 49.99, image: "/3.jpg" },
  { id: "2", name: "Purfium Rose", price: 59.99, image: "/4.jpg" },
  { id: "3", name: "Purfium Luxury", price: 69.99, image: "/22.jpg" },
  { id: "4", name: "Purfium Gold", price: 79.99, image: "/d1.jpg" },
  { id: "5", name: "Purfium Night", price: 89.99, image: "/17.jpg" },
];

export default function ProductDetails() {
  const params = useParams();
  const sell = sells.find((p) => p.id === params.id);

  if (!sell) {
    return (
      <div className="text-center mt-20 text-2xl">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-10">
        <Image
          src={sell.image}
          alt={sell.name}
          width={500}
          height={600}
          className="rounded-lg shadow"
        />

        <div>
          <h1 className="text-4xl font-bold">
            {sell.name}
          </h1>

          <p className="text-3xl font-bold mt-4">
            ${sell.price}
          </p>

          <div className="flex items-center gap-2 mt-4">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-gray-500">(124 reviews)</span>
          </div>

          <p className="mt-6 text-gray-600">
            This premium perfume is designed for elegance and long-lasting fragrance.
            Perfect for daily use and special occasions.
          </p>

          <button className="mt-6 w-full bg-black text-white py-3 rounded text-lg hover:bg-gray-800 transition">
            Add to Cart
          </button>

          <Link href="/">
            <button className="mt-4 w-full border py-3 rounded text-lg hover:bg-gray-200 transition">
              Back to Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}