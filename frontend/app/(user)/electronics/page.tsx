"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import { isAuthenticated } from "@/app/utility/auth";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category?: string;
}

const dummyProducts: Product[] = [
  { id: 1, name: "Smartphone X12", price: 799, img: "/board1.jpg", category: "Phones" },
  { id: 2, name: "Laptop Pro 15", price: 1299, img: "/images/laptop1.jpg", category: "Laptops" },
  { id: 3, name: "Wireless Headphones", price: 199, img: "/d1.jpg", category: "Headphones" },
  { id: 4, name: "Smartwatch Z", price: 299, img: "/d2.jpg", category: "Smartwatches" },
  { id: 5, name: "Gaming Console Y", price: 499, img: "/images/console1.jpg", category: "Gaming" },
];

const categories = [
  "All Electronics",
  "Phones",
  "Laptops",
  "Headphones",
  "Smartwatches",
  "Gaming",
];

const ElectronicsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(dummyProducts);
  const [selectedCategory, setSelectedCategory] = useState("All Electronics");

  const router = useRouter();
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:3001/electronics")
      .then((res) => res.json())
      .then((data: Product[]) => {
        if (data && data.length > 0) {
          setProducts(data);
        }
      })
      .catch(() => {
        console.log("Backend not available → using dummy electronics");
      });
  }, []);


  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();

    if (!isAuthenticated()) {
      alert("Please login first");
      router.push("/login");
      return;
    }

    addToCart(product);
    router.push("/cart");
  };

  const filteredProducts =
    selectedCategory === "All Electronics"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-600 to-white text-black bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-6">
        
  
        <aside className="w-64 bg-white rounded-lg shadow-md p-4 sticky top-10 h-fit">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-3 py-2 rounded transition
                    ${
                      selectedCategory === cat
                        ? "bg-red-600 text-white"
                        : "hover:bg-red-200"
                    }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-1">
          <h1 className="text-3xl font-bold mb-6">Electronics</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition flex flex-col"
              >
                <Link href={`/products/${product.id}`} className="flex-1">
                  <div className="relative w-full h-56">
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold truncate">
                      {product.name}
                    </h3>
                    <p className="text-blue-600 font-bold mt-2">
                      ${product.price}
                    </p>
                  </div>
                </Link>

                <div className="p-4 pt-0">
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="w-full bg-red-900 text-white py-2 rounded-md font-medium hover:bg-red-800 transition-colors duration-200"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-gray-500 mt-10">
              No products available in this category.
            </p>
          )}
        </main>
      </div>
    </div>
  );
};

export default ElectronicsPage;
