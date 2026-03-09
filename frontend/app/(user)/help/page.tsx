"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "How can I track my order?",
    answer: "You can track your order from the 'My Orders' page by clicking the 'View' button next to the order."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept credit/debit cards, PayPal, and bank transfers."
  },
  {
    question: "How do I cancel an order?",
    answer: "You can cancel orders that are still processing from the 'My Orders' page."
  }
];

const HelpContact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message sent:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-amber-50 p-8">
      <h1 className="text-4xl font-bold text-amber-900 mb-6">Help & Contact</h1>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="bg-white p-4 rounded-lg shadow cursor-pointer">
              <summary className="font-medium text-amber-900">{faq.question}</summary>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow max-w-lg">
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default HelpContact;
