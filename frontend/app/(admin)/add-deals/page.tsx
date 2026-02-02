"use client";
import React, { useState } from "react";


type Deal = {
  title: string;
  originalPrice: string;
  discountPrice: string;
  image: string | null;
};

const AddDealForm = () => {
  const [formData, setFormData] = useState<Deal>({
    title: "",
    originalPrice: "",
    discountPrice: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    } as Deal));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPreview(result);
      setFormData((prev) => ({ ...prev, image: result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/deals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to add deal");
      }

      const data = await res.json();
      console.log("Saved deal:", data);
      setSuccess(true);
      setFormData({ title: "", originalPrice: "", discountPrice: "", image: null });
      setPreview(null);
    } catch (err) {
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 2000);
    }
  };
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        padding: "3rem 1.5rem",
      }}
    >
      <section
        style={{
          maxWidth: "520px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "2rem",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "1rem" }}>
          Add New Deal
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Deal title"
            value={formData.title}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="number"
            name="originalPrice"
            placeholder="Original price"
            value={formData.originalPrice}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="number"
            name="discountPrice"
            placeholder="Discount price"
            value={formData.discountPrice}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            style={inputStyle}
          />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "12px",
                marginTop: "0.8rem",
              }}
            />
          )}

          <button
            type="submit"
            style={{
              marginTop: "1.5rem",
              width: "100%",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              padding: "0.75rem",
              borderRadius: "10px",
              border: "none",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Add Deal
          </button>
        </form>
      </section>
    </main>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.65rem",
  marginBottom: "0.8rem",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
};

export default AddDealForm;
