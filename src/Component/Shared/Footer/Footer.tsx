"use client";
import React, { useState } from "react";
import BasketBall from "../../../assets/imageBasketBall.png";
import Insta from "../../../assets/Insta.png";
import Be from "../../../assets/Be.png";
import Twitter from "../../../assets/Twitter.png";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
  };

  return (
    <>
      <div className="border-dotted border-gray-600 bg-black text-white p-2 flex flex-col  item-center   hidden md:block">
        <div className="flex flex-wrap justify-center space-x-10  text-sm font-medium gap-16">
          {[
            "TANK TOP",
            "T-SHIRT",
            "LONG-SLEEVE T-SHIRT",
            "RAGLAN SLEEVE SHIRT",
            "CROP TOP",
            "V-NECK SHIRT",
            "MUSCLE SHIRT",
          ].map((item) => (
            <span key={item} className="">
              {item}
              {/* <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-[1px] w-0 bg-yellow-500 group-hover:w-full transition-all duration-300 ease-in-out"></span> */}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-black justify-between items-center py-8 px-4 md:px-10">
        <h1 className="text-4xl md:text-8xl bg-black text-white font-bold tracking-wide text-center md:text-left">
          Style.Loom
        </h1>
        <div className="flex space-x-4 md:space-x-6 mt-4 md:mt-10">
          <a href="https://www.instagram.com/">
            <img src={Insta.src} className="h-8 md:h-10" alt="Instagram" />
          </a>
          <a href="https://www.sportingnews.com/in/nba?gr=www">
            <img
              src={BasketBall.src}
              className="h-8 md:h-10"
              alt="BasketBall"
            />
          </a>
          <a href="https://x.com/?lang=en">
            <img src={Twitter.src} className="h-8 md:h-10" alt="Twitter" />
          </a>
          <a href="https://www.behance.net/">
            <img src={Be.src} className="h-8 md:h-10" alt="Behance" />
          </a>
        </div>
      </div>

      <main className="mr-4 w-full">
        <footer className="bg-black w-full text-gray-300 py-10">
          <div className="px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Navigation Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Home</h2>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="hover:text-white">
                    Why Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#Testi" className="hover:text-white">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#FAQ" className="hover:text-white">
                    FAQ's
                  </a>
                </li>
              </ul>
            </div>

            {/* Products Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Products</h2>
              <ul className="flex space-x-2">
                <li>
                  <a href="/product#Pro" className="hover:text-white">
                    Menswear
                  </a>
                </li>
                <li>
                  <a href="/product" className="hover:text-white">
                    Womenswear
                  </a>
                </li>
                <li>
                  <a href="/product" className="hover:text-white">
                    Kidswear
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Subscribe to Newsletter
              </h2>
              <form onSubmit={handleSubscribe}>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-lg"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 bottom-0 px-4 bg-gray-600 hover:bg-gray-500 rounded-r-lg"
                  >
                    →
                  </button>
                </div>
              </form>
            </div>
          </div>

          <hr className="my-8 border-gray-700" />

          <div className="px-4 flex justify-between md:text-left">
            <p>© 2024 Styleloom. All rights reserved.</p>
            <div className="flex justify-center md:justify-end space-x-4 mt-4">
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Footer;
