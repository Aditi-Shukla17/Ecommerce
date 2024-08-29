import React from 'react';
import img from "./img/image.png";
import img1 from "./img/img3.png";

const ProductDetail: React.FC = () => {
  return (
    <section className="bg-black text-white py-20">
      {/* Header Section */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 border-2 border-dashed border-gray-500 rounded-lg p-4 flex justify-between items-center">
        <div>
          <h2 className="font-roboto text-3xl sm:text-4xl font-medium leading-tight mb-2 text-white">
            ELEGANT EVENING GOWN
          </h2>
          <div className="flex gap-3">
            <p className="text-lg text-gray-400">Fitted bodice, flowing skirt</p>
            <p className="text-lg text-green-200 bg-gray-700 rounded px-2">In stock</p>
          </div>
        </div>
        <div>
          <button className="mx-2 bg-gray-600 text-white rounded px-4 py-2 hover:bg-gray-500 transition duration-200">
            Add To Cart
          </button>
          <button className="bg-gray-700 text-white rounded px-4 py-2 hover:bg-gray-600 transition duration-200">
            Shop Now
          </button>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="bg-gray-700 p-6 max-w-screen-xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 border-dashed border-2 border-gray-500 rounded-lg overflow-hidden">
            <img
              src={img.src}
              alt="Main Outfit"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-2 grid grid-rows-2 gap-4">
            <div className="border-dashed border-2 border-gray-500 rounded-lg overflow-hidden">
              <img
                src={img.src}
                alt="Side Outfit 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="border-dashed border-2 border-gray-500 rounded-lg overflow-hidden">
              <img
                src={img.src}
                alt="Side Outfit 2"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="bg-gray-900 text-white p-10 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-screen-xl mx-auto px-4 sm:px-6 border-dashed border-2 border-gray-500">
        {/* Left Column */}
        <div>
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

        {/* Right Column */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc list-inside mb-6 text-gray-400">
            <li>Distressed detailing for a rugged look</li>
            <li>Button-up front closure with engraved metal buttons</li>
            <li>Two chest pockets with buttoned flaps</li>
            <li>Two side pockets for added functionality</li>
            <li>Adjustable buttoned cuffs for a personalized fit</li>
            <li>Back waist tabs for customizable styling</li>
          </ul>
          <h3 className="text-xl font-bold mb-2">Price</h3>
          <p className="text-2xl mb-4">$89.99 <span className="text-gray-400 text-xs">(MRP incl. of all taxes)</span></p>
          <button className="bg-gray-700 text-white rounded px-4 py-2 hover:bg-gray-600 transition duration-200 mb-6">
            Add To Cart
          </button>
          <h3 className="text-xl font-bold mb-2">Available Sizes</h3>
          <div className="flex space-x-2 mb-4">
            {['S', 'M', 'L', 'XL'].map((size) => (
              <span key={size} className="border border-gray-600 rounded px-3 py-1">
                {size}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-2">Ratings & Review</h3>
          <p className="text-yellow-400 text-2xl mb-2">4.8</p>
          <p className="text-gray-400 mb-4">(49 Ratings)</p>
          <div className="flex space-x-1">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className="text-yellow-400">★</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
