import React, { useState, ChangeEvent, FormEvent } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);

    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f9fafb", padding: "4rem 1.5rem" }}>
      <section
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "2.5rem",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          Contact Us
        </h1>

        <p style={{ color: "#4b5563", marginBottom: "2rem" }}>
          Have a question or need help? Fill out the form below and we’ ll get
          back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1.2rem" }}>
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

          <div style={{ marginBottom: "1.2rem" }}>
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

          <div style={{ marginBottom: "1.5rem" }}>
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
            style={{
              backgroundColor: "#2563eb",
              color: "#ffffff",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.7rem",
  marginTop: "0.4rem",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  outline: "none",
};

export default Contact;
