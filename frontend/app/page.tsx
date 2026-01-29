"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface Product {
  id: number
  name: string
  price: number
  img: string
}

const products: Product[] = [
  { id: 1, name: "Red Sneakers", price: 59.99, img: "/products/1.jpg" },
  { id: 2, name: "Blue T-Shirt", price: 25.0, img: "/products/2.jpg" },
  { id: 3, name: "Black Jacket", price: 120.0, img: "/products/3.jpg" },
  { id: 4, name: "Jeans", price: 70.0, img: "/products/4.jpg" },
]


const heroImages = ["/1.jpg", "/2.jpg", "/8.jpg", "/7.jpg"]

const Home: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <section className="bg-gradient-to-r from-gray-300 via-white to-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="relative h-[420px] md:h-[320px] max-w-6xl mx-auto overflow-hidden shadow-lg">

            {heroImages.map((img, index) => (
              <Image
                key={img}
                src={img}
                alt="Hero Background"
                fill
                priority={index === 0}
                className={`object-cover transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

          
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to My eCommerce Store
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Find the best products at unbeatable prices!
              </p>
              <Link href="/shop">
                <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-lg font-semibold">
                  Shop Now
                </button>
              </Link>
            </div>

          </div>
        </div>
      </section>

    
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              🔥 Hot Deals
            </h2>
            <Link href="/deals" className="text-blue-600 hover:underline text-sm">
              View All Deals →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            {[
              { img: "/9.jpg", title: "Running Sneakers", off: "-30%", price: "$49.99", old: "$69.99" },
              { img: "/10.jpg", title: "Casual T-Shirt", off: "-40%", price: "$19.99", old: "$32.99" },
              { img: "/11.jpg", title: "Winter Jacket", off: "-25%", price: "$89.99", old: "$119.99" },
              { img: "/12.jpg", title: "Denim Jeans", off: "-50%", price: "$34.99", old: "$69.99" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50  shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative h-48">
                  <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.off}
                  </span>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-red-600 font-bold">{item.price}</span>
                    <span className="text-gray-400 line-through text-sm">
                      {item.old}
                    </span>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col md:flex-row items-center justify-between gap-6">

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Shopping Made Easy
              </h2>
              <p className="text-gray-600">
                Discover amazing deals, fast delivery, and secure checkout.
              </p>
            </div>

            <button className="bg-red-600 hover:bg-red-700 transition text-white px-8 py-3 rounded-lg font-semibold">
              Start Now
            </button>

          </div>
        </div>
      </section>


      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">

    <div className="flex items-center justify-between mb-10">
      <h2 className="text-3xl font-bold text-gray-800">
        🔥 Trending on eCommerce
      </h2>
      <a href="/trending" className="text-blue-600 hover:underline text-sm">
        See All →
      </a>
    </div>

 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

      <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
        <div className="relative h-48">
          <span className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 rounded-full">
            Trending
          </span>
          <img
            src="/13.jpg"
            alt="Trending Product"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-1">
            Smart Watch Pro
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            2k+ sold this week
          </p>
          <span className="font-bold text-gray-900">$129.99</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
        <div className="relative h-48">
          <span className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 rounded-full">
            Hot
          </span>
          <img
            src="/14.jpg"
            alt="Trending Product"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-1">
            Wireless Headphones
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            1.5k+ orders today
          </p>
          <span className="font-bold text-gray-900">$89.99</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
        <div className="relative h-48">
          <span className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 rounded-full">
            Popular
          </span>
          <img
            src="/15.jpg"
            alt="Trending Product"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-1">
            Casual Sneakers
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            Trending in fashion
          </p>
          <span className="font-bold text-gray-900">$59.99</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
        <div className="relative h-48">
          <span className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 rounded-full">
            Best Seller
          </span>
          <img
            src="/16.jpg"
            alt="Trending Product"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-1">
            Leather Backpack
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            Top rated by users
          </p>
          <span className="font-bold text-gray-900">$74.99</span>
        </div>
      </div>

    </div>
  </div>
</section>



<section className="bg-gradient-to-r from-blue-700 via-green-900 to-purple-300 py-16">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-col md:flex-row items-center gap-10">


      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold text-white mb-4">
          Quality Products, Delivered Fast
        </h2>
        <p className="text-gray-400 mb-6">
          Explore our wide range of products with unbeatable prices. Shop with confidence and enjoy fast, reliable delivery straight to your doorstep.
        </p>
        <Link href="/shop">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Shop Now
          </button>
        </Link>
      </div>

    
<div className="md:w-1/2 flex justify-center">
  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
    <Image
      src="/20.jpg"       
      alt="Products"
      fill
      className="object-cover"
    />
  </div>
</div>


    </div>
  </div>
</section>


    </div>
  )
}

export default Home
