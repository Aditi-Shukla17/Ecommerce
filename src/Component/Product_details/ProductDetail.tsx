"use client";
import React from "react";
import { products } from "../Product/data";
import { useDispatch, useSelector } from "react-redux";
import { add } from "@/Redux/ProductSlice";
import { RootState } from "@/Redux/store";

interface ProductDetailProps {
  id: number;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ id }) => {
  const dispatch = useDispatch();

  // Retrieve the product details based on the ID
  const product = products.find((product) => product.id === id);

  // Retrieve the disabled buttons state from Redux
  const disabledButtons = useSelector(
    (state: RootState) => state.cart.disabledButtons
  );

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleAdd = (product: (typeof products)[0]) => {
    dispatch(add(product));
  };

  return (
    <section className="bg-black text-white py-10 sm:py-20">
      <div className="max-w-screen-xl mx-auto p-6x-4 sm:px-6 border-dotted border-2 border-gray-600 rounded-lg p-4 flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-col sm:flex-grow">
          <h2 className="font-roboto text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight mb-4 text-white">
            {product.name}
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <p className="text-left font-roboto text-base sm:text-lg lg:text-xl text-gray-400">
              {product.description}
            </p>
            <p className="text-left font-roboto text-base sm:text-lg lg:text-xl text-green-200 bg-gray-700 rounded px-2 py-1">
              In stock
            </p>
          </div>
        </div>
        <div>
          <button
            onClick={() => handleAdd(product)}
            className={`bg-gray-600 text-white rounded mt-8 mr-10 px-4 py-3 text-xs sm:text-base hover:bg-gray-500 transition duration-200 hover:cursor-pointer ${
              disabledButtons[product.id] ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!!disabledButtons[product.id]}
          >
            {disabledButtons[product.id] ? "Already in Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
      <div className="bg-black p-4 sm:p-6 max-w-screen-xl mx-auto mt-6 border-dotted border-2 border-gray-600 border-b-0">
        <div className="grid grid-flow-col gap-4 h-auto">
          <div className="col-span-2 border-dotted border-2 border-gray-600 rounded-lg overflow-hidden w-full">
            <img src={product.image} className="object-cover w-full h-full" />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="border-dotted border-2 border-gray-600 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={`${product.name} - 1`}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="border-dotted border-2 border-gray-600 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={`${product.name} - 2`}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white max-w-screen-xl mx-auto border-dotted border-2 border-gray-600 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 ml-5 mt-7 p-6">
              Materials, Care and Origin
            </h2>
            <div className="border-dotted border-2 border-gray-600 border-l-0 border-r-0 p-12">
              <h3 className="text-lg font-semibold mb-2">Join Life</h3>
              <p className="text-gray-400 mb-4">
                Trf garments are produced using sustainable materials and
                technologies. We aim to reduce the environmental impact of our
                products.
              </p>
              <h3 className="text-lg font-semibold mb-2">Care</h3>
              <p className="text-gray-400 mb-4">
                - Hand wash only
                <br />
                - Do not bleach
                <br />
                - Iron at low temperature
                <br />- Professional dry clean
              </p>
              <h3 className="text-lg font-semibold mb-2">Origin</h3>
              <p className="text-gray-400">
                We work with monitoring programs to ensure compliance with
                safety, health, and quality standards for our products.
              </p>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4 m-4">
            <div className="flex flex-col justify-center items-center border-dotted border-2 border-gray-600 rounded-lg">
              <img
                src={product.image}
                alt={`${product.name} - 3`}
                className="object-cover w-full h-60"
              />
            </div>
            <div className="flex flex-col justify-center items-center border-dotted border-2 border-gray-600 rounded-lg">
              <img
                src={product.image}
                alt={`${product.name} - 4`}
                className="object-cover w-full h-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
