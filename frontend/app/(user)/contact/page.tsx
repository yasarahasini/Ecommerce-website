"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

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
    <main className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <section className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-xl overflow-hidden">
        
  
<div className="md:w-1/2 bg-gray-200 flex justify-center items-center p-4">
  <video
    src="/v1.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-96 md:h-full object-contain rounded-lg shadow-lg"
  />
</div>


        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center md:text-left">
            Contact Us
          </h1>

          {success && (
            <p className="text-green-600 text-center mb-4 font-medium">{success}</p>
          )}
          {errors.length > 0 && (
            <ul className="text-red-600 mb-4">
              {errors.map((err, i) => (
                <li key={i} className="text-sm">
                  {err}
                </li>
              ))}
            </ul>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
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
              <label className="block text-gray-700 font-medium mb-1">Email</label>
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
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className={inputClasses + " resize-none"}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white font-semibold transition-colors ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
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

const inputClasses =
  "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400";
