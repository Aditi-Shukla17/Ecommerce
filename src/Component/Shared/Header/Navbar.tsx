

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="fixed w-full  bg-red-500">
      <nav className="flex justify-between items-center w-full p-2 bg-black text-white px-16">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button className="bg-gray-800 text-white py-2 px-4 rounded-md flex items-center hover:bg-gray-700">
            Home
          </button>
          <button className="bg-gray-800 text-white py-2 px-4 rounded-md flex items-center hover:bg-gray-700">
            Products
          </button>
        </div>

        {/* Center Section (Brand Name) */}
        <div className="text-white text-xl font-bold flex-grow text-center">
          Style.Loom
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="bg-gray-800 text-white py-2 px-4 rounded-md flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l1.38-5H8.62M7 13l-2 8h12l2-8M7 13L5.62 5M8.62 8h10.76M17 16a1 1 0 102 0 1 1 0 00-2 0z" />
            </svg>
          </button>
          <button className="bg-[#c3a688] text-black py-2 px-4 rounded-md">
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

