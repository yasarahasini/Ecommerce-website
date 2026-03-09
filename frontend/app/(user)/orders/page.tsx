"use client";
import React, { useState } from "react";

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  items?: { name: string; qty: number; price: number }[];
}

const orders: Order[] = [
  {
    id: "ORD-1001",
    date: "2026-03-05",
    status: "Delivered",
    total: 4500,
    items: [
      { name: "Gift Box Set", qty: 1, price: 2500 },
      { name: "Pipe Cleaner Flowers", qty: 2, price: 1000 },
    ],
  },
  {
    id: "ORD-1002",
    date: "2026-03-07",
    status: "Processing",
    total: 1800,
    items: [{ name: "Handmade Gift Card", qty: 3, price: 600 }],
  },
  {
    id: "ORD-1003",
    date: "2026-03-08",
    status: "Shipped",
    total: 3200,
    items: [
      { name: "Custom Mug", qty: 2, price: 1600 },
    ],
  },
];

const Page: React.FC = () => {
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  const toggleOrder = (id: string) => {
    setExpandedOrderId(expandedOrderId === id ? null : id);
  };

  return (
    <div className="bg-gradient-to-r from-amber-50 to-blue-50 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-5 rounded-lg shadow"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Order ID: {order.id}</p>
                <p className="text-gray-500 text-sm">Date: {order.date}</p>
              </div>

              <div>
                <p className="font-semibold">Rs. {order.total}</p>
              </div>

              <div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    order.status === "Delivered"
                      ? "bg-green-200 text-green-700"
                      : order.status === "Processing"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-blue-200 text-blue-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              <button
                onClick={() => toggleOrder(order.id)}
                className="bg-black text-white px-4 py-2 rounded"
              >
                {expandedOrderId === order.id ? "Hide" : "View"}
              </button>
            </div>

            {/* Expandable Order Items */}
            {expandedOrderId === order.id && order.items && (
              <div className="mt-4 border-t pt-4 space-y-2">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between">
                    <p>{item.name} x {item.qty}</p>
                    <p>Rs. {item.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;