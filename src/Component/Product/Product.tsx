"use client"
import React from "react";
import img from "../../assets/image.png";
import img2 from "./img/image.png";
import img3 from "./img/img2.png";
import img4 from "./img/img3.png";
import { useRouter } from "next/navigation";

const Product: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/productDetails");
  };

  return (
    <section className="bg-black text-white py-20 z-100">
      <div className="w-[90%] mx-auto px-4 sm:px-6 relative">
        <h2 className="font-roboto text-3xl sm:text-4xl lg:text-4xl font-medium leading-tight mb-4 text-white">
          EXPLORE THE LATEST TRENDS AND TIMELESS CLASSICS
        </h2>
        <p className="text-gray-400 mb-8 text-[18px] leading-normal sm:text-[16px] sm:leading-6">
          Dive into the world of fashion excellence at StyleLoom. Our curated selection brings together the latest trends and timeless classics.
        </p>
        <div className="flex space-x-4 mb-8">
          <button className="border border-white rounded px-4 py-2">All</button>
          <button className="border border-white rounded px-4 py-2">Mens</button>
          <button className="bg-custom-gray rounded px-4 py-2">Womens</button>
          <button className="border border-white rounded px-4 py-2">Kids</button>
        </div>
        <img
          src={img.src}
          alt=""
          className="sm:w-36 sm:h-48 absolute right-12 top-0 hidden md:block rotate-[-20.36]"
        />
      </div>

      <div className="w-[90%] mx-auto px-4 sm:px-6">
        {/* Dress Collection */}
        <h3 className="text-xl font-semibold mb-4">DRESS COLLECTION</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[img4, img2, img3].map((image, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm">
              <img
                src={image.src}
                alt="Dress"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <div className="text-white p-4">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm bg-gray-700 inline-block px-2 py-1 rounded">Womenswear</p>
                  <button
                    className="-mt-1 bg-gray-600 text-white rounded px-4 py-2 hover:bg-gray-500 transition duration-200"
                    onClick={handleClick}
                  >
                    Shop Now
                  </button>
                </div>
                <h3 className="text-lg font-semibold mb-2">Dress Title {index + 1}</h3>
                <p className="text-gray-400">Fit: Description {index + 1}</p>
                <p className="text-xl font-bold">${(index + 1) * 50 + 4.99}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Accessories */}
        <h3 className="text-xl font-semibold mb-4">ACCESSORIES</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[img4, img2, img3].map((image, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm">
              <img
                src={image.src}
                alt="Accessory"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <div className="text-white p-4">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm bg-gray-700 inline-block px-2 py-1 rounded">Womenswear</p>
                  <button
                    className="-mt-1 bg-gray-600 text-white rounded px-4 py-2 hover:bg-gray-500 transition duration-200"
                    onClick={handleClick}
                  >
                    Shop Now
                  </button>
                </div>
                <h3 className="text-lg font-semibold mb-2">Accessory Title {index + 1}</h3>
                <p className="text-gray-400">Fit: Description {index + 1}</p>
                <p className="text-xl font-bold">${(index + 1) * 50 + 4.99}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bags and Handbags */}
        <h3 className="text-xl font-semibold mb-4">BAGS AND HANDBAGS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[img4, img2, img3].map((image, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm">
              <img
                src={image.src}
                alt="Bag"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <div className="text-white p-4">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm bg-gray-700 inline-block px-2 py-1 rounded">Womenswear</p>
                  <button
                    className="-mt-1 bg-gray-600 text-white rounded px-4 py-2 hover:bg-gray-500 transition duration-200"
                    onClick={handleClick}
                  >
                    Shop Now
                  </button>
                </div>
                <h3 className="text-lg font-semibold mb-2">Bag Title {index + 1}</h3>
                <p className="text-gray-400">Fit: Description {index + 1}</p>
                <p className="text-xl font-bold">${(index + 1) * 50 + 4.99}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
