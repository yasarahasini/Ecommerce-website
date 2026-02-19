"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Accessory = {
  _id: string;
  name: string;
  price: number;
  image?: string;
};

const API_URL = "http://localhost:3001";

const AccessoriesPage = () => {
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const res = await fetch(`${API_URL}/accessories`);
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setAccessories(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccessories();
  }, []);


  const handleAddToCart = (item: Accessory) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");


    const cartItem = {
      id: item._id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    };

    existingCart.push(cartItem);

    localStorage.setItem("cart", JSON.stringify(existingCart));

  
    router.push("/cart");
  };

  
  const handleBuyNow = (item: Accessory) => {
    handleAddToCart(item);
  };

  if (loading) {
    return <p className="text-center mt-10">Loading accessories...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto bg-gradient-to-b from-white via-red-300 to-yellow-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Accessories</h1>

      {accessories.length === 0 ? (
        <p className="text-center text-gray-500">No accessories found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {accessories.map((item) => {
            const imageSrc = item.image
              ? item.image.startsWith("http")
                ? item.image
                : `${API_URL}/uploads/accessories/${item.image}`
              : "/placeholder.png";

            return (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow p-4 text-black flex flex-col"
              >
                <img
                  src={imageSrc}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded mb-3"
                />

                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-gray-700 mb-4">Rs. {item.price}</p>

                <div className="mt-auto flex gap-2">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded"
                  >
                    Add to Cart
                  </button>

                  <button
                    onClick={() => handleBuyNow(item)}
                    className="flex-1 bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 rounded"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AccessoriesPage;
