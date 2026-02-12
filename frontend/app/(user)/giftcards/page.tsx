"use client";

import React, { useState } from "react";

const giftAmounts = [1000, 2500, 5000, 10000];

const GiftCardPage: React.FC = () => {
  const [amount, setAmount] = useState<number>(giftAmounts[0]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        
    
        <div className=" bg-gradient-to-r from-purple-300 to-blue-600 bg-gray-500 text-white rounded-xl shadow p-6">
          <h1 className="text-3xl font-semibold mb-4">🎁 Gift Card</h1>
          <p className="text-white mb-6">
            Give the perfect gift! Our gift cards can be used on any product
            in our store and are delivered instantly via email.
          </p>

          <ul className="space-y-3 text-sm text-white">
            <li>✔ Valid for 12 months</li>
            <li>✔ Redeemable online only</li>
            <li>✔ Non-refundable</li>
            <li>✔ Can be used with discounts</li>
          </ul>

          <div className="mt-6 p-4 border rounded-lg bg-purple-500">
            <p className="text-sm text-white">
              Selected Amount:
              <span className="font-semibold ml-2">
                LKR {amount.toLocaleString()}
              </span>
            </p>
          </div>
        </div>

   <div className="max-w-xl text-white mx-auto">
     
      <div className="relative rounded-xl shadow-lg overflow-hidden">
     
        <div className="absolute inset-0 bg-[url('/7.jpg')] bg-cover bg-center" />

      
        <div className="" />

      
        <div className="relative p-6 ">
          <h2 className="text-2xl font-semibold mb-4">
            Customize Your Gift Card
          </h2>

       
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Select Amount
            </label>
            <div className="grid grid-cols-2 gap-3">
              {giftAmounts.map((value) => (
                <button
                  key={value}
                  onClick={() => setAmount(value)}
                  className={`border rounded-md py-2 text-sm font-medium transition ${
                    amount === value
                      ? "border-black bg-black text-white"
                      : "border-gray-300 hover:border-black"
                  }`}
                >
                  LKR {value.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

       
          <div className="space-y-4 ">
            <input
              type="text"
              placeholder="Recipient Name"
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-black outline-none"
            />

            <input
              type="email"
              placeholder="Recipient Email"
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-black outline-none"
            />

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-black outline-none"
            />

            <textarea
              placeholder="Personal Message (optional)"
              rows={4}
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-black outline-none"
            />
          </div>

         
          <div className="mt-4">
            <label className="block text-sm font-medium mb-2">
              Delivery Method
            </label>
            <select className="w-full border rounded-md px-4 py-2">
              <option>Email (Instant)</option>
              <option>Schedule for later</option>
            </select>
          </div>

      
          <button className="mt-6 w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition font-medium">
            Add Gift Card to Cart
          </button>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default GiftCardPage;
