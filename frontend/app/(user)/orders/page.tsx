import React from "react";

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
}

const orders: Order[] = [
  {
    id: "ORD-1001",
    date: "2026-03-05",
    status: "Delivered",
    total: 4500,
  },
  {
    id: "ORD-1002",
    date: "2026-03-07",
    status: "Processing",
    total: 1800,
  },
  {
    id: "ORD-1003",
    date: "2026-03-08",
    status: "Shipped",
    total: 3200,
  },
];

const Page: React.FC = () => {
  return (
    <div className="bg-amber-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-5 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">Order ID: {order.id}</p>
              <p className="text-gray-500 text-sm">Date: {order.date}</p>
            </div>

            <div>
              <p className="font-semibold">Rs. {order.total}</p>
            </div>

            <div>
              <span className="px-3 py-1 rounded-full bg-green-200 text-green-700 text-sm">
                {order.status}
              </span>
            </div>

            <button className="bg-black text-white px-4 py-2 rounded">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;