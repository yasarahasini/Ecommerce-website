"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">🛒 Cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
          <div>
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-gray-600">
              ${item.price} × {item.quantity}
            </p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-6 text-right">
        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
}
