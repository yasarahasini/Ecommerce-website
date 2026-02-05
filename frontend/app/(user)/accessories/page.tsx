"use client";

import { useEffect, useState } from "react";

type Accessory = {
  _id: string;
  name: string;
  price: number;
  image: string; // image URL from backend
};

const AccessoriesPage = () => {
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const res = await fetch("http://localhost:3001/accessories");
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

  if (loading) {
    return <p className="text-center mt-10">Loading accessories...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Accessories
      </h1>

      {accessories.length === 0 ? (
        <p className="text-center text-gray-500">
          No accessories found
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {accessories.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow p-4 text-black"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded mb-3"
              />

              <h2 className="font-semibold text-lg">
                {item.name}
              </h2>

              <p className="text-gray-700">
                Rs. {item.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccessoriesPage;
