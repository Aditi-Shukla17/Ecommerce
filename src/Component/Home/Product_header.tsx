"use client";
import React from "react";
import img from "../../assets/image.png";

import { useRouter } from "next/navigation";
import { products } from "./data";


const Product_header: React.FC = () => {
  const router = useRouter();

  const handleClick = (id:number) => {
    router.push(`/productDetails/${id}`);
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative border-dotted border-2 border-gray-600 rounded-lg p-4">
        <h2 className="font-roboto text-3xl  font-bold mt-2 eading-tight  text-white">
        Elevate Your Style with Our Latest Collection
        </h2>
        <p className="text-gray-400 mb-4 text-base leading-normal mb-8">
        Each piece is crafted to enhance your fashion statement.
        </p>
        <div className="flex flex-wrap gap-4 ">
          <button className="border border-white rounded px-4 py-2 text-sm sm:text-base hover:cursor-pointer">
            All
          </button>
          <button className="border border-white rounded px-4 py-2 text-sm sm:text-base hover:cursor-pointer">
            Mens
          </button>
          <button className="bg-custom-gray rounded px-4 py-2 text-sm sm:text-base hover:cursor-pointer">
            Womens
          </button>
          <button className="border border-white rounded px-4 py-2 text-sm sm:text-base hover:cursor-pointer">
            Kids
          </button>
        </div>
        <img
          src={img.src}
          alt="Fashion"
          className="sm:w-38 sm:h-40 absolute right-0 top-0 hidden md:block rotate-[-20.36]"
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 mt-8">
   
        {["Dress Collection", "ACCESSORIES", "BAGS AND HANDBAGS"].map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {products
                .filter(product => product.category === category)
                .map((product, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm border-dotted border-2 border-gray-600"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded mb-4"
                    />
                    <div className="text-white p-4">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <p className="text-xs sm:text-sm bg-gray-700 inline-block px-2 py-1 rounded">
                          Womenswear
                        </p>
                        <button
                          className="bg-gray-600 text-white rounded px-3 py-1 text-xs sm:text-base hover:bg-gray-500 transition duration-200 hover:cursor-pointer"
                          onClick={()=>handleClick(product.id)}
                        >
                          Shop Now
                        </button>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base">
                        {product.description}
                      </p>
                      <p className="text-xl font-bold">{product.price}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product_header;