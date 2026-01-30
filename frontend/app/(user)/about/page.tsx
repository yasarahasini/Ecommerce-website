"use client";
import React from "react";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f9fafb", padding: "4rem 1.5rem" }}>
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#dbeafe",
          borderRadius: "16px",
          padding: "2.5rem",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>
          About Us
        </h1>

        <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#4b5563" }}>
          Welcome to <strong>ShopEase</strong>, your trusted online shopping
          destination. We focus on delivering quality products, secure payments,
          and a smooth shopping experience for every customer.
        </p>

        <section style={{ marginTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 600 }}>Our Mission</h2>
          <p style={{ marginTop: "0.5rem", color: "#4b5563" }}>
            To make online shopping simple, reliable, and accessible to
            everyone by offering great products and excellent service.
          </p>
        </section>

        <section style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 600 }}>Our Vision</h2>
          <p style={{ marginTop: "0.5rem", color: "#4b5563" }}>
            To become a customer-first e-commerce platform people trust and
            return to again and again.
          </p>
        </section>

        <section style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 600 }}>Why Choose Us?</h2>
          <ul style={{ marginTop: "0.75rem", paddingLeft: "1.2rem", color: "#4b5563" }}>
            <li>High-quality products</li>
            <li>Secure and fast checkout</li>
            <li>Reliable delivery</li>
            <li>Helpful customer support</li>
          </ul>
        </section>

        <p style={{ marginTop: "3rem", textAlign: "center", color: "#6b7280" }}>
          Thank you for shopping with <strong>ShopEase</strong>. 🛒
        </p>
      </section>
    </main>
  );
};

export default About;
