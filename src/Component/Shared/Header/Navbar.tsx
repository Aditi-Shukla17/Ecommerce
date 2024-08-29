"use client";
import React, { useState } from "react";
import Link from "react-router-dom";
const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-red-500">
      <nav className="flex justify-between items-center w-full p-2 bg-black text-white px-4 sm:px-12">
        {/* Left Section */}
        <div className=" flex items-center gap-2 sm:gap-4">
          {/* <button className="  bg-gray-800 text-white py-2 px-3 sm:px-4 rounded-md flex items-center hover:bg-gray-700 hover:scale-105 transition duration-200"> */}
          <a
            className="hidden md:block bg-gray-800 text-white py-2 px-3 sm:px-4 rounded-md flex items-center hover:bg-gray-700 hover:scale-105 transition duration-200"
            href="/home"
            target="_blank"
          >
            Home
          </a>
          {/* </button> */}
          {/* <button className=" bg-gray-800 text-white py-2 px-3 sm:px-4 rounded-md flex items-center hover:bg-gray-700 hover:scale-105 transition duration-200"> */}
          <a
            className="hidden md:block bg-gray-800 text-white py-2 px-3 sm:px-4 rounded-md flex items-center hover:bg-gray-700 hover:scale-105 transition duration-200"
            href="/product"
            target="_blank"
          >
            Product
          </a>
          {/* </button> */}
        </div>

        {/* Center Section (Brand Name) */}
        <div className="text-white text-lg sm:text-xl font-bold flex-grow text-center">
          Style.Loom
        </div>

        {/* Right Section */}
        <div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <h1>HOME</h1>
            </li>
            <li>
              {/* <Link to="/project">Project</Link> */}
              <h1>PRODUCT</h1>
            </li>
            <li>
              <h1>CONTACT</h1>
            </li>
            {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}
          </ul>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <h1>HAM</h1>
            ) : (
              // <FaTimes size={20} style={{ color: "#fff" }} />
              <h1>TEST</h1>
              // <FaBars size={20} style={{ color: "#fff" }} />
            )}
          </div>
        </div>
        {/* Hamburger Menu
        <button
          onClick={handleClick}
          className="flex flex-col justify-center items-center"
        >
          HAM
          <span
            className={`bg-steel-500 block transition-all duration -all duraction-300 ease-out h-0.5 w-6 rounded-sm  ${
              isOpen ? "rotate-45 translate-y-l" : "-translate-y-0.5"
            }`}
          >
            Home
          </span>
          <span
            className={`bg-steel-500 block transition-all duration -all duraction-300 ease-out h-0.5 w-6 rounded-sm  ${
              isOpen ? "rotate-45 translate-y-l" : "-translate-y-0.5"
            }`}
          >
            Product
          </span>
          <span
            className={`bg-steel-500 block transition-all duration -all duraction-300 ease-out h-0.5 w-6 rounded-sm  ${
              isOpen ? "rotate-45 translate-y-l" : "-translate-y-0.5"
            }`}
          >
            Contact
          </span>
        </button> */}
        <div className=" flex items-center gap-2 sm:gap-4">
          <button className="hidden md:block bg-gray-800 text-white py-2 px-3 sm:px-4 rounded-md flex items-center hover:bg-gray-700 hover:scale-105 transition duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l1.38-5H8.62M7 13l-2 8h12l2-8M7 13L5.62 5M8.62 8h10.76M17 16a1 1 0 102 0 1 1 0 00-2 0z"
              />
            </svg>
          </button>
          <button className="hidden md:block bg-[#c3a688] text-black py-2 px-3 sm:px-4 rounded-md hover:bg-[#a78b66] hover:scale-105 transition duration-200">
            <a href="/contact" target="_blank">
              Contact
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
