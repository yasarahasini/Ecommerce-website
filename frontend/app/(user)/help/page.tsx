"use client";

import React from "react";

const HelpContactPage: React.FC = () => {
  return (
    <div className="min-h-screen text-black  bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
      
        <div className="bg-white text-blue-600 rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Help & Support</h2>

          <div className="space-y-4 text-sm text-gray-600">
            <div>
              <h4 className="font-medium text-gray-800">
                📦 How can I track my order?
              </h4>
              <p>
                After placing an order, you can track it from the
                <span className="font-medium"> My Orders </span>
                section in your account.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-gray-800">
                🔄 What is your return policy?
              </h4>
              <p>
                You can return products within 7 days of delivery if they are
                unused and in original condition.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-gray-800">
                💳 What payment methods are accepted?
              </h4>
              <p>
                We accept Credit/Debit Cards, Online Banking, and Cash on
                Delivery.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-gray-800">
                📞 Need urgent help?
              </h4>
              <p>
                Email us or call our support team between 9 AM – 6 PM (Mon–Fri).
              </p>
            </div>
          </div>
        </div>

        
        <div className="bg-green-900 text-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

          <form className="space-y-4 text-white">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 text-white focus:ring-black"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 text-white focus:ring-black"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 text-white focus:ring-black"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 text-white transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-6 text-sm text-white space-y-1">
            <p>📧 Email: support@yashstore.com</p>
            <p>📞 Phone: +94 71 054 9560</p>
            <p>📍 Address: Colombo, Sri Lanka</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpContactPage;
