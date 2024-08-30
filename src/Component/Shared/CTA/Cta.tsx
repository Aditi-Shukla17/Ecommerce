import React from 'react';

const Cta = () => {
  return (
    <div className='w-full bg-black  p-8  flex items-center justify-between'>
    <div className="w-[95%] bg-[#d2c1ab] p-8 md:p-12 lg:p-16 rounded-lg mx-auto max-w-7xl relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10 "></div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <div className="text-center lg:text-left mb-6 lg:mb-0 max-w-2xl">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">ELEVATE YOUR WARDROBE</h2>
          <p className="text-sm md:text-base lg:text-lg">
            Don’t miss out – experience the epitome of fashion by clicking 'Buy Now' and embrace a world of chic elegance delivered to your doorstep. Your style journey begins here.
          </p>
        </div>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-black text-white rounded-md text-sm md:text-base lg:text-lg font-medium hover:bg-gray-800 transition"
        >
          Shop Now <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
    </div>
  );
};

export default Cta;
