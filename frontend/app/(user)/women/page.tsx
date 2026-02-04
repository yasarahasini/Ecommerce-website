"use client";

import { useState, useMemo } from "react";
import WomenSidebar from "@/app/components/sidebar";
import { useCart } from "../context/CartContext";

interface Product {
  id: number;
  name: string;
  category: string;
  size: string[];
  price: number;
  modelUrl: string; // Sketchfab 3D model URL
}

const products: Product[] = [
  {
    id: 1,
    name: "Floral Dress",
    category: "Dresses",
    size: ["S", "M"],
    price: 49.99,
    modelUrl: "https://sketchfab.com/models/96dc1fe40d1d4ceeb30740158c39e79b/embed?autostart=1",
  },
{
  id: 2,
  name: "Casual Top",
  category: "Tops",
  size: ["M", "L"],
  price: 29.99,
  modelUrl: "https://sketchfab.com/3d-models/casual-clothes-3d76c9f61c9140f2ab61c601af3f5e71/embed?autostart=1",
}

,
 {
  id: 3,
  name: "Jeans",
  category: "Jeans",
  size: ["S", "M", "L"],
  price: 59.99,
  modelUrl: "https://sketchfab.com/models/c8696af4fbfc4f54977ffc5e4b53ac33/embed?autostart=1",
}
,
 {
  id: 4,
  name: "Handbag",
  category: "Bags",
  size: [],
  price: 89.99,
  modelUrl: "https://sketchfab.com/models/6c0b277c88424a1ea86d2ff44951ee69/embed?autostart=1"
},
{
  id: 5,
  name: "Sneakers",
  category: "Shoes",
  size: ["M", "L"],
  price: 69.99,
  modelUrl: "https://sketchfab.com/models/b49f5b8cd9e94fe7883f3e9af8f41acc/embed?autostart=1"
}
,
  {
  id: 6,
  name: "Jacket",
  category: "Jackets",
  size: ["L", "XL"],
  price: 99.99,
  modelUrl: "https://sketchfab.com/models/811fef12daf24bd783604f2a316187c5/embed?autostart=1"
}
,
];

export default function WomenPage() {
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
        <h1 className="text-3xl font-bold mb-8 text-center">Womens Collection</h1>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <WomenSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
          />

          {/* Product Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* 3D Model Embed */}
                <div className="w-full h-64">
                  <iframe
                    title={`${product.name} 3D model`}
                    src={product.modelUrl}
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking="true"
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-3 w-full text-center bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
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
