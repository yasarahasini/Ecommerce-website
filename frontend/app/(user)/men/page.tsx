"use client";
import Image from "next/image";
import { useState, useMemo } from "react";
import MenSidebar from "@/app/components/sidebar";
import { useCart } from "../context/CartContext";

interface Product {
  id: number;
  name: string;
  category: string;
  size: string[];
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Casual Shirt", category: "Shirts", size: ["S","M","L"], price: 39.99, image: "/men1.jpg" },
  { id: 2, name: "T-Shirt", category: "Tops", size: ["M","L","XL"], price: 24.99, image: "/men2.jpg" },
  { id: 3, name: "Jeans", category: "Jeans", size: ["S","M","L","XL"], price: 59.99, image: "/men3.jpg" },
  { id: 4, name: "Sneakers", category: "Shoes", size: ["M","L","XL"], price: 79.99, image: "/men4.jpg" },
  { id: 5, name: "Jacket", category: "Jackets", size: ["L","XL"], price: 99.99, image: "/men5.jpg" },
  { id: 6, name: "Cap", category: "Accessories", size: [], price: 19.99, image: "/men6.jpg" },
];

export default function MenPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
      const matchesSize = selectedSize ? p.size.includes(selectedSize) : true;
      let matchesPrice = true;
      if (selectedPrice) {
        if (selectedPrice === "Under $50") matchesPrice = p.price < 50;
        if (selectedPrice === "$50 - $100") matchesPrice = p.price >= 50 && p.price <= 100;
        if (selectedPrice === "$100 - $200") matchesPrice = p.price > 100 && p.price <= 200;
      }
      return matchesCategory && matchesSize && matchesPrice;
    });
  }, [selectedCategory, selectedSize, selectedPrice]);

  return (
    <div className="bg-gray-50 text-black min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Mens Collection</h1>
        <div className="flex flex-col lg:flex-row gap-6">
        
          <MenSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
          />

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 w-full">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
                  <button
                    onClick={addToCart}
                    className="mt-3 w-full text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
