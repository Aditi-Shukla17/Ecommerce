import React from 'react';
import img from "./img/image.png";
import img1 from "./img/img3.png";

const ProductDetail: React.FC = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="bg-black bg-opacity-50 py-12 mx-auto">
        <div className="max-w-7xl px-4 sm:px-6 ml-10">
          <h2 className="font-roboto text-3xl sm:text-4xl lg:text-4xl font-medium leading-tight mb-4 text-white">
            ELEGANT EVENING GOWN
          </h2>
          <div className='flex flex-col sm:flex-row w-full gap-3'>
            <p className="text-left mb-12 font-roboto text-lg sm:text-base lg:text-base text-gray-400">
              Fitted bodice, flowing skirt
            </p>
            <p className="text-left mb-12 font-roboto text-lg sm:text-base lg:text-base text-green-200 bg-gray-700">
              In stock
            </p>
          </div>
        </div>

        <div className="absolute top-24 right-20 flex gap-5">
          <button className="bg-gray-600 text-white rounded px-4 py-2 hover:bg-gray-500 transition duration-200">
            Add To Cart
          </button>
          <button className="bg-gray-700 text-white rounded px-4 py-2 hover:bg-gray-600 transition duration-200">
            Shop Now
          </button>
        </div>
      </div>

      <div className="bg-gray-700 p-6 flex flex-col md:flex-row gap-4">
        {/* First Column - Main Image */}
        <div className="flex-1 mb-4 md:mb-0">
          <img 
            src={img.src} // Replace with the actual main image source
            alt="Main Outfit"
            className="object-cover rounded-lg shadow-lg w-full h-full"
          />
        </div>
        
        {/* Second Column - Two Stacked Images */}
        <div className="flex flex-col flex-1 gap-4">
          <img 
            src={img.src} // Replace with the actual side image source
            alt="Side Outfit 1"
            className="object-cover rounded-lg shadow-lg w-full h-[50%] md:h-[50%]"
          />
          <img 
            src={img.src} // Replace with the actual side image source
            alt="Side Outfit 2"
            className="object-cover rounded-lg shadow-lg w-full h-[50%] md:h-[50%]"
          />
        </div>
      </div>

      <div className="bg-gray-900 text-white p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className='p-10'>
          <h2 className="text-2xl font-bold mb-4">Materials, Care and Origin</h2>
          <h3 className="text-lg font-semibold mb-2">Join Life</h3>
          <p className="text-gray-400 mb-4">
            Tracing its roots back to ancient Greek draped garments, it has evolved through centuries, often crafted from luxurious fabrics like silks, satins, and velvets.
          </p>
          <h3 className="text-lg font-semibold mb-2">Materials</h3>
          <p className="text-gray-400 mb-4">
            Flowing from Grecian folds to glittering silks, the evening gown has graced centuries in luxury.
          </p>
          <img 
            src={img1.src}
            alt="Materials"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Section */}
        <div className="border-l border-gray-700 p-10">
          <div className='p-5'>
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="list-disc list-inside mb-4 text-gray-400">
              <li>Distressed detailing for a rugged look</li>
              <li>Button-up front closure with engraved metal buttons</li>
              <li>Two chest pockets with buttoned flaps</li>
              <li>Two side pockets for added functionality</li>
              <li>Adjustable buttoned cuffs for a personalized fit</li>
              <li>Back waist tabs for customizable styling</li>
            </ul>
          </div>
          
          <div className='p-5'>
            <h3 className="text-xl font-bold mb-2">Price</h3>
            <p className="text-2xl mb-4">$89.99 <span className="text-gray-400 text-xs">(MRP incl. of all taxes)</span></p>
            <button className="bg-gray-700 text-white rounded px-4 py-2 hover:bg-gray-600 transition duration-200 mb-4">
              Add To Cart
            </button>
          </div>

          <h3 className="text-xl font-bold mb-2">Available Sizes</h3>
          <div className="flex space-x-2 mb-4">
            <span className="border border-gray-600 rounded-xl px-3 py-1">S</span>
            <span className="border border-gray-600 rounded px-3 py-1">M</span>
            <span className="border border-gray-600 rounded px-3 py-1">L</span>
            <span className="border border-gray-600 rounded px-3 py-1">XL</span>
          </div>

          <h3 className="text-xl font-bold mb-2">Ratings & Review</h3>
          <p className="text-yellow-400 text-2xl mb-2">4.8</p>
          <p className="text-gray-400 mb-4">(49 Ratings)</p>
          <div className="flex space-x-1">
            {[5, 4, 3, 2, 1].map((star) => (
              <span key={star} className="text-yellow-400">★</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
