"use client";

import { useState, useEffect } from "react";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch messages from backend
  useEffect(() => {
    async function fetchMessages() {
      try {
        const res = await fetch("http://localhost:3001/contact");
        const data = await res.json();
        setMessages(data);
      } catch (err) {
        console.error("Failed to fetch messages:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchMessages();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <section className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Admin Dashboard
        </h1>

        {loading ? (
          <p className="text-gray-500 text-center">Loading messages...</p>
        ) : messages.length === 0 ? (
          <p className="text-gray-500 text-center">No messages found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead className="bg-blue-200">
                <tr>
                  <th className="border px-4 py-2">ID</th>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Message</th>
                  <th className="border px-4 py-2">Created At</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg) => (
                  <tr key={msg.id} className="hover:bg-gray-100">
                    <td className="border px-4 py-2 text-center">{msg.id}</td>
                    <td className="border px-4 py-2">{msg.name}</td>
                    <td className="border px-4 py-2">{msg.email}</td>
                    <td className="border px-4 py-2">{msg.message}</td>
                    <td className="border px-4 py-2 text-gray-500 text-sm">
                      {new Date(msg.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
