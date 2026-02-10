import Image from "next/image";

import ProtectedRoute from "@/app/components/protectedroute";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Classic Sneakers",
    price: 59.99,
    image: "/products/shoe.jpg",
  },
  {
    id: 2,
    name: "Leather Backpack",
    price: 89.99,
    image: "/products/bag.jpg",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 129.99,
    image: "/products/watch.jpg",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 79.99,
    image: "/products/headphones.jpg",
  },
   {
    id: 1,
    name: "Classic Sneakers",
    price: 59.99,
    image: "/products/shoe.jpg",
  },
  {
    id: 2,
    name: "Leather Backpack",
    price: 89.99,
    image: "/products/bag.jpg",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 129.99,
    image: "/products/watch.jpg",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 79.99,
    image: "/products/headphones.jpg",
  },
   {
    id: 1,
    name: "Classic Sneakers",
    price: 59.99,
    image: "/products/shoe.jpg",
  },
  {
    id: 2,
    name: "Leather Backpack",
    price: 89.99,
    image: "/products/bag.jpg",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 129.99,
    image: "/products/watch.jpg",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 79.99,
    image: "/products/headphones.jpg",
  },
   {
    id: 1,
    name: "Classic Sneakers",
    price: 59.99,
    image: "/products/shoe.jpg",
  },
  {
    id: 2,
    name: "Leather Backpack",
    price: 89.99,
    image: "/products/bag.jpg",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 129.99,
    image: "/products/watch.jpg",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 79.99,
    image: "/products/headphones.jpg",
  },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Shop Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
          >
            <div className="relative w-full h-56">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <h2 className="mt-4 text-lg font-semibold">
              {product.name}
            </h2>

            <p className="text-gray-600 mt-1">
              ${product.price}
            </p>

            <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
