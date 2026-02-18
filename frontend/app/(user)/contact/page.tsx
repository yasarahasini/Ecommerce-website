"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const inputClasses =
  "w-full px-3 py-2 text-sm border border-white/30 bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-white/70";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    setSuccess("");

    try {
      const res = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors(Array.isArray(data.message) ? data.message : [data.message]);
      } else {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Frontend ERROR:", err);
      setErrors(["Cannot connect to backend"]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="relative min-h-screen flex justify-center items-center p-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/brandoutlet.jpg')" }}
    >
    
      <div className="absolute inset-0 bg-black/60" />

     
      <section className="relative w-full max-w-md backdrop-blur-md bg-white/10 shadow-2xl rounded-xl overflow-hidden">
        <div className="p-6 md:p-7">
          <h1 className="text-2xl font-bold mb-4 text-white text-center">
            Contact Us
          </h1>

          {success && (
            <p className="text-green-400 text-center mb-3 text-sm font-medium">
              {success}
            </p>
          )}

          {errors.length > 0 && (
            <ul className="text-red-400 mb-3">
              {errors.map((err, i) => (
                <li key={i} className="text-xs">
                  {err}
                </li>
              ))}
            </ul>
          )}

          <form onSubmit={handleSubmit} className="space-y-3 text-white">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className={inputClasses + " resize-none"}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2.5 rounded-lg text-white text-sm font-semibold transition-colors ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
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
