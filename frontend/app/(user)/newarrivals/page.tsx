"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const heroImages = ["/1.jpg", "/2.jpg", "/8.jpg", "/7.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const sections = [
    {
      title: "Skateboards",
      desc: "High-quality boards for every trick and skill level.",
      products: [
        { name: "Pro Board", price: "$120", img: "/board1.jpg" },
        { name: "Street Board", price: "$99", img: "/board2.jpg" },
        { name: "Mini Cruiser", price: "$80", img: "/board3.jpg" },
      ],
      bg: "bg-gradient-to-b from-blue-300 via-purple-100 to-white",
    },
    {
      title: "Wheels & Trucks",
      desc: "Smooth ride with durable wheels and precise trucks.",
      products: [
        { name: "Speed Wheels", price: "$45", img: "/wheels1.jpg" },
        { name: "Grip Wheels", price: "$50", img: "/wheels2.jpg" },
        { name: "Trucks Set", price: "$70", img: "/trucks.jpg" },
      ],
      bg: "bg-gradient-to-b from-pink-300 via-green-100 to-white",
    },
    {
      title: "Protective Gear",
      desc: "Stay safe while skating in style.",
      products: [
        { name: "Helmet", price: "$60", img: "/helmet.jpg" },
        { name: "Knee Pads", price: "$30", img: "/kneepads.jpg" },
        { name: "Elbow Pads", price: "$25", img: "/elbowpads.jpg" },
      ],
      bg: "bg-gradient-to-b from-yellow-300 via-white to-gray-200",
    },
  ];

  return (
    <div className="min-h-screen">

  
      <section className="relative w-full h-[600px] overflow-hidden">
        <Image
          src={heroImages[currentImage]}
          alt="Hero"
          fill
          className="object-cover transition-opacity duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold uppercase mb-4 animate-fadeIn">
            New Arrivals
          </h1>
          <p className="text-lg md:text-2xl font-semibold mb-6 animate-fadeIn">
            Explore the latest boards, wheels, and gear.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-lime-400 to-blue-500 text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition animate-fadeIn"
          >
            Shop Now
          </Link>
        </div>
      </section>

   
      {sections.map((sec, idx) => (
        <FadeInSection key={idx}>
          <section className={`${sec.bg} py-16`}>
            <div
              className={`mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                idx % 2 === 0 ? "md:grid-flow-row" : "md:grid-flow-row-dense"
              }`}
            >
             
              <div className="text-center md:text-left space-y-4 transform transition duration-700 hover:scale-105">
                <h2 className="text-4xl md:text-6xl font-bold uppercase">
                  {sec.title}
                </h2>
                <p className="text-lg font-semibold">{sec.desc}</p>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-lime-400 to-orange-400 text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition"
                >
                  Shop {sec.title}
                </Link>
              </div>

             
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {sec.products.map((prod, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden transform hover:scale-105"
                  >
                    <div className="relative w-full aspect-[3/4]">
                      <Image
                        src={prod.img}
                        alt={prod.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{prod.name}</h3>
                      <p className="text-gray-700">{prod.price}</p>
                      <Link
                        href="/shop"
                        className="mt-2 inline-block px-4 py-2 bg-orange-400 text-black rounded hover:bg-orange-500 transition"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>
      ))}
    </div>
  );
}
