"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import { isAuthenticated } from "@/app/utility/auth";

interface FashionItem {
  id: number;
  name: string;
  price: number;
  image: string;
}


const dummyFashionItems: FashionItem[] = [
  { id: 1, name: "Classic Denim Jacket", price: 49.99, image: "/f1.jpg" },
  { id: 2, name: "Summer Floral Dress", price: 39.99, image: "/f22.jpg" },
  { id: 3, name: "Casual Sneakers", price: 59.99, image: "/f3.jpg" },
  { id: 4, name: "Stylish Handbag", price: 29.99, image: "/f4.jpg" },
  { id: 5, name: "Leather Boots", price: 79.99, image: "/f5.jpg" },
  { id: 6, name: "Trendy Sunglasses", price: 19.99, image: "/f6.jpg" },
];

const Fashion: React.FC = () => {
  const [items] = useState<FashionItem[]>(dummyFashionItems);
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (item: FashionItem) => {
    if (!isAuthenticated()) {
      alert("Please login first");
      router.push("/login");
      return;
    }
    addToCart(item);
    router.push("/cart");
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f3f4f6", padding: "3rem 1.5rem" }}>
      <section style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700 }}>Fashion Collection</h1>

        <div
          style={{
            marginTop: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "14px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100%", height: "260px", objectFit: "cover" }}
              />

              <div style={{ padding: "1rem" }}>
                <h3 style={{ fontWeight: 600 }}>{item.name}</h3>
                <p style={{ color: "#6b7280" }}>${item.price}</p>

                <button
                  onClick={() => handleAddToCart(item)}
                  style={{
                    marginTop: "0.7rem",
                    width: "100%",
                    backgroundColor: "blue",
                    color: "white",
                    padding: "0.6rem",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Fashion;
