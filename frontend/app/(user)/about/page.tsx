
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-12">
    
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          About Our Store
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome to our e-commerce store! We are dedicated to providing the best products with top-notch service. Our mission is to make your shopping experience seamless and enjoyable.
        </p>
      </div>

    
      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Our Story
          </h2>
          <p className="text-gray-600 mb-4">
            Started in 2023, our store quickly became a favorite for quality products. We believe in customer satisfaction and quality above everything else.
          </p>
          <p className="text-gray-600">
            Every item is handpicked and curated with care, ensuring that you get only the best.
          </p>
        </div>
        <div>
          <img
            src="/about-hero.jpg" 
            alt="Our Story"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>


      <div className="mt-16 max-w-5xl w-full grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="font-semibold text-xl mb-2">Quality Products</h3>
          <p className="text-gray-600">
            Only the best items, carefully selected for you.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="font-semibold text-xl mb-2">Fast Delivery</h3>
          <p className="text-gray-600">
            Get your orders quickly with our reliable shipping.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="font-semibold text-xl mb-2">Customer Support</h3>
          <p className="text-gray-600">
            Friendly and responsive support whenever you need help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
