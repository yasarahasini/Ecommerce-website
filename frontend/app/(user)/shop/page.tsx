"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  { id: 1, name: "Classic Sneakers", price: 59.99, image: "/9.jpg", category: "Footwear" },
  { id: 2, name: "Leather Backpack", price: 89.99, image: "/f4.jpg", category: "Accessories" },
  { id: 3, name: "Smart Watch", price: 129.99, image: "/d2.jpg", category: "Electronics" },
  { id: 4, name: "Wireless Headphones", price: 79.99, image: "/14.jpg", category: "Electronics" },
];

const categories = ["All", "Electronics", "Footwear", "Accessories", "Apparel"];

export default function ShopPage() {
  const router = useRouter();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    router.push("/cart");
  };

 
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      

      <aside className="w-full md:w-64 bg-white border-r border-gray-200 p-6">
        <h2 className="text-xl font-bold mb-6">Filters</h2>
        
        <div className="mb-8">
          <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4 tracking-wider">
            Categories
          </h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-3 py-2 rounded-md transition ${
                    selectedCategory === cat 
                      ? "bg-blue-500 text-blue-700 font-medium" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4 tracking-wider">
            Price Range
          </h3>
          <input type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>$0</span>
            <span>$500+</span>
          </div>
        </div>
      </aside>

    
      <main className="flex-1 p-6 md:p-10 bg-gradient-to-tr bg-grsy-50 via-white from-gray-300">
        <header className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shop Our Products</h1>
            <p className="text-gray-500 mt-2">Showing {filteredProducts.length} items</p>
          </div>
          
          <select className="bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>Sort by: Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </header>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition p-4"
            >
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="mt-4">
                <span className="text-xs font-medium text-blue-600 uppercase tracking-tight">
                  {product.category}
                </span>
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-900 font-bold mt-1">${product.price}</p>
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full bg-blue-700 text-white py-2.5 rounded-lg hover:bg-blue-800 transition-colors font-medium"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </main>
    </div>
  );
}