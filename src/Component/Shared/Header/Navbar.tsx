"use client"
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-red-500">
      <nav className="flex justify-between items-center w-full p-2 bg-black text-white px-4 sm:px-12">
        {/* Left Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="bg-gray-800 text-white py-2 px-3 sm:px-4 rounded-md flex items-center hover:bg-gray-700 hover:scale-105 transition duration-200">
            Home
          </button>
          <button className="bg-gray-800 text-white py-2 px-3 sm:px-4 rounded-md flex items-center hover:bg-gray-700 hover:scale-105 transition duration-200">
            Products
          </button>
        </div>

        {/* Center Section (Brand Name) */}
        <div className="text-white text-lg sm:text-xl font-bold flex-grow text-center">
          Style.Loom
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="bg-gray-800 text-white py-2 px-3 sm:px-4 rounded-md flex items-center hover:bg-gray-700 hover:scale-105 transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l1.38-5H8.62M7 13l-2 8h12l2-8M7 13L5.62 5M8.62 8h10.76M17 16a1 1 0 102 0 1 1 0 00-2 0z" />
            </svg>
          </button>
          <button className="bg-[#c3a688] text-black py-2 px-3 sm:px-4 rounded-md hover:bg-[#a78b66] hover:scale-105 transition duration-200">
            Contact
          </button>
          <button
            className="sm:hidden bg-gray-800 text-white py-2 px-3 rounded-md hover:bg-gray-700 hover:scale-105 transition duration-200"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Dropdown Menu for smaller screens */}
      {isOpen && (
        <div className="sm:hidden bg-black text-white">
          <button className="block w-full text-left py-2 px-4 hover:bg-gray-700 transition duration-200">Home</button>
          <button className="block w-full text-left py-2 px-4 hover:bg-gray-700 transition duration-200">Products</button>
          <button className="block w-full text-left py-2 px-4 hover:bg-gray-700 transition duration-200">Contact</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
