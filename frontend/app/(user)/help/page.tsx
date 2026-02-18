"use client";

import React from "react";

const HelpContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-150 via-gray-200 to-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 perspective-[1200px]">

      
        <div
          className="bg-white text-blue-800 rounded-2xl p-6
          shadow-[0_20px_40px_rgba(0,0,0,0.15)]
          transform transition-all duration-300
          hover:-translate-y-2 hover:rotate-[0.5deg] hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
        >
          <h2 className="text-2xl font-semibold mb-6">Help & Support</h2>

          <div className="space-y-5 text-sm text-gray-600">
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

 
        <div
          className="bg-gradient-to-br from-blue-800 to-blue-950 text-white rounded-2xl p-6
          shadow-[0_25px_50px_rgba(0,0,0,0.4)]
          transform transition-all duration-300
          hover:-translate-y-2 hover:rotate-[-0.5deg] hover:shadow-[0_35px_70px_rgba(0,0,0,0.55)]"
        >
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg px-4 py-2
              bg-white/10 backdrop-blur-md border border-white/20
              text-white placeholder-white/60
              focus:outline-none focus:ring-2 focus:ring-white/40"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg px-4 py-2
              bg-white/10 backdrop-blur-md border border-white/20
              text-white placeholder-white/60
              focus:outline-none focus:ring-2 focus:ring-white/40"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full rounded-lg px-4 py-2
              bg-white/10 backdrop-blur-md border border-white/20
              text-white placeholder-white/60
              focus:outline-none focus:ring-2 focus:ring-white/40"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-white text-black py-2 rounded-lg
              shadow-[0_8px_0_#111]
              active:translate-y-2 active:shadow-none
              hover:bg-gray-900 transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-6 text-sm space-y-1 text-white/90">
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
