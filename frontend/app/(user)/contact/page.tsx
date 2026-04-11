"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Improved accessibility and contrast for the glassmorphism effect
const inputClasses =
  "w-full px-3 py-2 text-sm border border-gray-300 bg-white/80 dark:bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; msg: string | string[] }>({
    type: null,
    msg: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: "" });

    try {
      // Use environment variables for production readiness
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
      
      const res = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ 
          type: 'error', 
          msg: Array.isArray(data.message) ? data.message : [data.message || "Something went wrong"] 
        });
      } else {
        setStatus({ type: 'success', msg: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      setStatus({ type: 'error', msg: ["Cannot connect to the server. Please try again later."] });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen flex justify-center items-center p-4 bg-gray-100">
      <section className="relative w-full max-w-md bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Get in Touch
          </h1>

          {/* Alert Messages */}
          {status.type === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4 text-sm">
              {status.msg}
            </div>
          )}

          {status.type === 'error' && Array.isArray(status.msg) && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              {status.msg.map((err, i) => (
                <p key={i} className="text-xs font-medium">• {err}</p>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 ml-1">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 ml-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 ml-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                placeholder="How can we help?"
                className={`${inputClasses} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white text-sm font-bold shadow-lg transition-all active:scale-95 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-200"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}