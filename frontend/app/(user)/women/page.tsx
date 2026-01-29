"use client";
import Image from "next/image";
import Link from "next/link";
import WomenSidebar from "@/app/components/sidebar";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Floral Dress", price: 49.99, image: "/18.jpg" },
  { id: 2, name: "Casual Top", price: 29.99, image: "/19.jpg" },
  { id: 3, name: "Jeans", price: 59.99, image: "/25.jpg" },
  { id: 4, name: "Handbag", price: 89.99, image: "/22.jpg" },
  { id: 5, name: "Sneakers", price: 69.99, image: "/26.jpg" },
  { id: 6, name: "Jacket", price: 99.99, image: "/24.jpg" },
];

export default function WomenPage() {
  return (
    <div className="bg-gray-50 text-black min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Women s Collection</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <WomenSidebar />

          {/* Product Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
                  <Link
                    href={`/product/${product.id}`}
                    className="mt-3 inline-block w-full text-center bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
