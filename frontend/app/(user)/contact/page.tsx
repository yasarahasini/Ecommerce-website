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
  const [debugLog, setDebugLog] = useState<string[]>([]); // for request logs

  const logDebug = (msg: string) => {
    console.log(msg);
    setDebugLog((prev) => [msg, ...prev]);
  };

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
      logDebug(`Sending form data: ${JSON.stringify(formData)}`);

      const res = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      logDebug(`Backend response: ${JSON.stringify(data)}`);

      if (!res.ok) {
        setErrors(Array.isArray(data.message) ? data.message : [data.message]);
      } else {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Frontend ERROR:", err);
      logDebug(`Frontend ERROR: ${err}`);
      setErrors(["Cannot connect to backend"]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "4rem 1.5rem",
        background: "#f9fafb",
      }}
    >
      <section
        style={{
          maxWidth: 600,
          margin: "0 auto",
          background: "#fff",
          padding: 32,
          borderRadius: 16,
        }}
      >
        <h1 style={{ fontSize: 32, marginBottom: 16 }}>Contact Us</h1>

        {success && <p style={{ color: "green", marginBottom: 16 }}>{success}</p>}
        {errors.length > 0 && (
          <ul style={{ color: "red", marginBottom: 16 }}>
            {errors.map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              style={{ ...inputStyle, resize: "none" }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              background: loading ? "#9ca3af" : "#2563eb",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              borderRadius: 8,
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Debug panel */}
        {debugLog.length > 0 && (
          <section
            style={{
              marginTop: 24,
              padding: 16,
              background: "#f3f4f6",
              borderRadius: 8,
              maxHeight: 200,
              overflowY: "auto",
              fontSize: 12,
              fontFamily: "monospace",
            }}
          >
            <h3 style={{ marginBottom: 8 }}>Debug Log</h3>
            {debugLog.map((msg, i) => (
              <p key={i} style={{ margin: 2 }}>
                {msg}
              </p>
            ))}
          </section>
        )}
      </section>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem",
  marginTop: 4,
  borderRadius: 8,
  border: "1px solid #d1d5db",
};
