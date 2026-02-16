"use client";

import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import jsPDF from "jspdf";

export default function CheckoutPage() {
  const { cart } = useCart();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentSlip, setPaymentSlip] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">🛒 Your cart is empty</h2>
      </div>
    );
  }

  const handlePlaceOrder = async () => {
    if (!fullName || !email || !address || !city || !phone) {
      alert("Please fill all billing details.");
      return;
    }

    if (!paymentSlip) {
      alert("Please upload your payment slip.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("address", address);
      formData.append("city", city);
      formData.append("phone", phone);
      formData.append("total", total.toString());
      formData.append("items", JSON.stringify(cart));
      formData.append("paymentSlip", paymentSlip);

      const response = await fetch("http://localhost:3001/orders", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to place order");

      const data = await response.json();

      alert("✅ Order placed successfully!");
      generatePDF({ ...data, cart });
      router.push("/");
    } catch (err: any) {
      alert(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const generatePDF = (orderData: any) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("🧾 Order Confirmation", 20, 20);

    orderData.cart.forEach((item: any, index: number) => {
      doc.text(
        `${item.name} × ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`,
        20,
        30 + index * 10
      );
    });

    doc.text(`Total: $${orderData.total.toFixed(2)}`, 20, 40 + orderData.cart.length * 10);
    doc.text(`Payment Slip: ${orderData.paymentSlip}`, 20, 50 + orderData.cart.length * 10);
    doc.text(`Order Date: ${new Date().toLocaleString()}`, 20, 60 + orderData.cart.length * 10);

    doc.save("order-confirmation.pdf");
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Billing Details Form */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Shipping Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border px-4 py-2 rounded"
            />

            <label className="block mt-2">
              <span className="text-sm font-medium">Upload Payment Slip</span>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => setPaymentSlip(e.target.files?.[0] || null)}
                className="mt-1 block w-full border px-4 py-2 rounded"
              />
              {paymentSlip && (
                <p className="text-sm text-green-600 mt-1">{paymentSlip.name}</p>
              )}
            </label>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.name} × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={loading}
            className="mt-6 w-full bg-blue-800 text-white py-3 rounded hover:bg-gray-800 transition"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
}
