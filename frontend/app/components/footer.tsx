"use client";
import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="relative text-gray-300">

      {/* 🎬 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/footer-video.mp4" type="video/mp4" />
      </video>

      {/* 🔥 Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
          <p className="text-sm">
            We are a modern e-commerce platform providing quality products at affordable prices. Your satisfaction is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/shop" className="hover:text-white transition">Shop</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Customer Service</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="/shipping" className="hover:text-white transition">Shipping & Returns</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/terms-condition" className="hover:text-white transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Stay Connected</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded text-gray-900"
            />
            <button className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded transition">
              Subscribe
            </button>
          </form>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white transition">Facebook</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="relative text-center text-sm text-gray-400 pb-6">
        &copy; {new Date().getFullYear()} Ecommerce Website. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;