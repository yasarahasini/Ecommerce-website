// pages/ElectronicsPage.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

const products: Product[] = [
  { id: 1, name: "Smartphone X12", price: 799, img: "/images/phone1.jpg" },
  { id: 2, name: "Laptop Pro 15", price: 1299, img: "/images/laptop1.jpg" },
  { id: 3, name: "Wireless Headphones", price: 199, img: "/images/headphones1.jpg" },
  { id: 4, name: "Smartwatch Z", price: 299, img: "/images/smartwatch1.jpg" },
  { id: 5, name: "Gaming Console Y", price: 499, img: "/images/console1.jpg" },
];

const categories = ["All Electronics", "Phones", "Laptops", "Headphones", "Smartwatches", "Gaming"];

const ElectronicsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-6">
        {/* Sidebar */}
        <aside className="w-64 bg-white rounded-lg shadow-md p-4 sticky top-10 h-fit">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button className="w-full text-left px-3 py-2 rounded hover:bg-red-100 transition">
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Products Grid */}
        <main className="flex-1">
          <h1 className="text-3xl font-bold mb-6">Electronics</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <Link href={`/products/${product.id}`}>
                  <div className="relative w-full h-56">
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-red-500 font-bold mt-2">${product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ElectronicsPage;
