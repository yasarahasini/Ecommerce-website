"use client";
import React, { useState } from "react";

interface DealFormData {
  title: string;
  originalPrice: string;
  discountPrice: string;
  image: File | null;
}

const AddDealForm: React.FC = () => {
  const [formData, setFormData] = useState<DealFormData>({
    title: "",
    originalPrice: "",
    discountPrice: "",
    image: null,
  });

  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dealPayload = {
      title: formData.title,
      originalPrice: Number(formData.originalPrice),
      discountPrice: Number(formData.discountPrice),
      image: formData.image,
    };

    console.log("Deal submitted:", dealPayload);

    // reset
    setFormData({
      title: "",
      originalPrice: "",
      discountPrice: "",
      image: null,
    });
    setPreview(null);
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
