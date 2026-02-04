"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
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
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Fetch previous messages from backend
  useEffect(() => {
    async function fetchMessages() {
      try {
        const res = await fetch("http://localhost:3001/contact");
        const data = await res.json();
        setMessages(data);
      } catch (err) {
        console.error("Failed to fetch messages:", err);
      }
    }
    fetchMessages();
  }, []);

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
        setMessages((prev) => [...prev, data]); // Add new message to list
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
        {/* Left side - 3D model / image */}
      

        {/* Right side - form and messages */}
        <div className="md:w-1/2 p-8 flex flex-col">
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

          

          {/* Display previous messages */}
          <section className="overflow-y-auto">
            <h2 className="text-xl font-bold mb-2">Previous Messages</h2>
            {messages.length === 0 ? (
              <p className="text-gray-500">No messages yet.</p>
            ) : (
              <ul className="space-y-3 max-h-64 overflow-y-auto">
                {messages.map((msg) => (
                  <li key={msg.id} className="border p-3 rounded-lg bg-gray-50">
                    <p>
                      <strong>{msg.name}</strong> ({msg.email})
                    </p>
                    <p>{msg.message}</p>
                    <small className="text-gray-400 text-xs">
                      {new Date(msg.createdAt).toLocaleString()}
                    </small>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}

const inputClasses =
  "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400";
