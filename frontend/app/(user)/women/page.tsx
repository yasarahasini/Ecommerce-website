"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import WomenSidebar from "@/app/components/sidebar";
import { useCart } from "../context/CartContext";

interface Product {
  id: number;
  name: string;
  category: string;
  size: string[];
  price: number;
  modelUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Floral Dress",
    category: "Dresses",
    size: ["S", "M"],
    price: 49.99,
    modelUrl:
      "https://sketchfab.com/models/d28d416fda2f436399ea3a17c986d396/embed?autostart=1",
  },
  {
    id: 2,
    name: "Casual Top",
    category: "Tops",
    size: ["M", "L"],
    price: 29.99,
    modelUrl:
      "https://sketchfab.com/models/c8696af4fbfc4f54977ffc5e4b53ac33/embed?autostart=1",
  },
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

];

export default function WomenPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { addToCart } = useCart();
  const router = useRouter();

  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      selectedCategory ? p.category === selectedCategory : true
    );
  }, [selectedCategory]);

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Womens Collection
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-xl"
            >
              <div className="h-64">
                <iframe
                  src={product.modelUrl}
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>

              <div className="p-4">
                <h2 className="font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>

                <button
                  onClick={() => {
                    addToCart(product);
                    router.push("/cart");
                  }}
                  className="mt-3 w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
