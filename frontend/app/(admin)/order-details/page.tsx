"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const API_URL = "http://localhost:3001";

const OrderSuccessPage = () => {
  const params = useParams();
  const orderId = params.id as string;

  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await fetch(`${API_URL}/orders/${orderId}`);
        if (!res.ok) throw new Error("Failed to fetch order");

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
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Customer Details</h2>
        <p><strong>Name:</strong> {order.fullName}</p>
        <p><strong>Email:</strong> {order.email}</p>
        <p><strong>Address:</strong> {order.address}</p>
        <p><strong>City:</strong> {order.city}</p>
        <p><strong>Phone:</strong> {order.phone}</p>
      </div>

      {/* Items */}
      <div className="bg-gray-50 p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Items</h2>

        {order.items?.map((item: any) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}

        <hr className="my-4" />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${order.total?.toFixed(2)}</span>
        </div>
      </div>

      {/* Payment Slip */}
      {order.paymentSlip && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Payment Slip</h2>
          <img
            src={`${API_URL}/uploads/slips/${order.paymentSlip}`}
            alt="Payment Slip"
            className="max-w-sm rounded"
          />
        </div>
      )}
    </div>
  );
};

export default OrderSuccessPage;
