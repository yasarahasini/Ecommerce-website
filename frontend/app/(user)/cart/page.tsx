"use client";

import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const initialCart: CartItem[] = [
  { id: 1, name: "Leather Handbag", price: 59.99, image: "/images/accessories/bag.jpg", quantity: 1 },
  { id: 2, name: "Sneakers", price: 89.99, image: "/images/accessories/shoes.jpg", quantity: 2 },
];

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  const increaseQty = (id: number) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQty = (id: number) => {
    setCart(cart.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <ShoppingCart /> Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-6">
         
          <div className="flex-1">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between bg-white shadow rounded p-4 mb-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1 ml-4">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 py-1 border rounded"
                    >-</button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-2 py-1 border rounded"
                    >+</button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/3 bg-white shadow rounded p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Items:</span>
              <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
            </div>
            <div className="flex justify-between mb-2 font-bold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mt-4">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
