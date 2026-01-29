"use client";

import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  tag?: string;
}

const newArrivals: Product[] = [
  { id: 1, name: "Summer Floral Dress", price: 54.99, image: "/18.jpg", tag: "New" },
  { id: 2, name: "Oversized Casual Top", price: 34.99, image: "/19.jpg", tag: "Hot" },
  { id: 3, name: "High Waist Jeans", price: 69.99, image: "/25.jpg", tag: "New" },
  { id: 4, name: "Leather Handbag", price: 99.99, image: "/22.jpg", tag: "Trending" },
  { id: 5, name: "White Sneakers", price: 74.99, image: "/26.jpg", tag: "New" },
  { id: 6, name: "Denim Jacket", price: 109.99, image: "/24.jpg", tag: "Limited" },
];

export default function NewArrivalsPage() {
  return (
    <div className="min-h-screen text-blue-600 bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        
     
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold  text-pink-500 mb-2">New Arrivals</h1>
          <p className="text-gray-600">
            Discover the latest styles just added to our store
          </p>
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 shadow-sm-pink-300 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />

                {product.tag && (
                  <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs px-2 py-1 rounded">
                    {product.tag}
                  </span>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-pink-600 font-bold mt-1">
                  ${product.price.toFixed(2)}
                </p>

                <Link
                  href={`/product/${product.id}`}
                  className="mt-3 block text-center bg-blue-600 text-white py-2 rounded hover:bg-gray-800 transition"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
