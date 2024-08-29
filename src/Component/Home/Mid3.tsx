import React from 'react';
import midimg2 from '../../assets/midimg2.png';

const Midd3: React.FC = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        
        {/* Upper Dotted Box */}
        <div className="border-dotted border-2 border-gray-600 p-8 rounded-xl flex flex-col lg:flex-row items-center justify-between">
          <div className="text-left mb-6 lg:mb-0">
            <h2 className="text-3xl font-bold mb-2">
              NAVIGATING THE STYLELOOM FASHION JOURNEY.
            </h2>
            <p className="text-gray-400">
              At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible.
            </p>
          </div>
          <div className="w-32 h-32 lg:w-40 lg:h-40">
            <img
              src={midimg2.src}
              alt="Design Element"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Lower Dotted Box */}
        <div className="border-dotted border-2 border-gray-600 p-8 rounded-xl mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 01 */}
            <div className="border-dotted border-2 border-gray-600 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Step 01</h3>
              <h4 className="text-xl font-semibold mb-4">Discover Trends</h4>
              <p className="text-gray-400">
                Explore our curated collection of over 1000 styles, spanning global fashion trends.
              </p>
            </div>

            {/* Step 02 */}
            <div className="border-dotted border-2 border-gray-600 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Step 02</h3>
              <h4 className="text-xl font-semibold mb-4">Effortless Navigation</h4>
              <p className="text-gray-400">
                Intuitive filters and categories help you find the perfect pieces tailored to your style.
              </p>
            </div>

            {/* Step 03 */}
            <div className="border-dotted border-2 border-gray-600 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Step 03</h3>
              <h4 className="text-xl font-semibold mb-4">Secure Checkout</h4>
              <p className="text-gray-400">
                Multiple payment options and encrypted transactions ensure a safe and hassle-free purchase.
              </p>
            </div>

            {/* Step 04 */}
            <div className="border-dotted border-2 border-gray-600 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Step 04</h3>
              <h4 className="text-xl font-semibold mb-4">Unbox Happiness</h4>
              <p className="text-gray-400">
                Unbox a fashion-forward experience delivered right to your door, ready to elevate your style.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Midd3;
