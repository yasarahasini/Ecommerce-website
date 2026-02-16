"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  _id: string;
  fullName: string;
  email: string;
  address: string;
  city: string;
  phone: string;
  total: number;
  items: OrderItem[];
  paymentSlip?: string;
  createdAt: string;
}

export default function OrderSuccessPage() {
  const params = useParams();
  const orderId = params.id as string;

  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await fetch(`http://localhost:3001/orders/${orderId}`);
        const data = await res.json();
        setOrder(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (orderId) fetchOrder();
  }, [orderId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading order...
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Order not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6 text-green-600">
        ✅ Order Placed Successfully
      </h1>

      {/* Customer Info */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
        <p><strong>Name:</strong> {order.fullName}</p>
        <p><strong>Email:</strong> {order.email}</p>
        <p><strong>Phone:</strong> {order.phone}</p>
        <p><strong>Address:</strong> {order.address}, {order.city}</p>
      </div>

      {/* Order Items */}
      <div className="bg-gray-50 shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Items</h2>

        {order.items.map((item, index) => (
          <div key={index} className="flex justify-between mb-2">
            <span>{item.name} × {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}

        <hr className="my-4" />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${order.total.toFixed(2)}</span>
        </div>
      </div>

      {/* Payment Slip */}
      {order.paymentSlip && (
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Slip</h2>
          <a
            href={`http://localhost:3001/uploads/${order.paymentSlip}`}
            target="_blank"
            className="text-blue-600 underline"
          >
            View Uploaded Slip
          </a>
        </div>
      )}
    </div>
  );
}
