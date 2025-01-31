"use client";
import React, { useState } from "react";
// import img from "../../assets/image.png";
// import { useRouter } from "next/navigation";
// import { products } from "./data";
// import { useDispatch, useSelector } from "react-redux";
// import { add } from "@/Redux/ProductSlice";


//const Product_header: React.FC = () => {
  // const [filter, setFilter] = useState<string>("All");
  // const router = useRouter();
  // const dispatch = useDispatch();

  // const disabledButtons = useSelector((state) => state.cart.disabledButtons);
  // console.log(disabledButtons, "disabledButtons");

  // const handleClick = (id: number) => {
  //   router.push(`/productDetails/${id}`);
  // };

  // const handleFilterChange = (category: string) => {
  //   setFilter(category);
  // };

  // const handleAdd = (product) => {
  //   dispatch(add(product));
  // };

  // const filteredProducts =
  //   filter === "All"
  //     ? products
  //     : products.filter((product) => product.category === filter);
 // return (
   // <Product />

    // <section className="bg-black text-white py-20">
    //   <div className=" bg-black max-w-screen-xl mx-auto px-4">
    //     <div className="border-2 border-dotted border-gray-700 p-4 max-w-7xl mx-auto rounded-lg">
    //       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative border-dotted border-2 border-gray-600 rounded-lg p-4">
    //         <h2 className="font-roboto text-3xl font-bold mt-2 leading-tight text-white">
    //           ELEVATE YOUR STYLE WITH OUR LATEST COLLECTION
    //         </h2>
    //         <p className="text-gray-400 mb-4 text-base leading-normal mb-8">
    //           Dive into the world of fashion excellence at StyleLoom. Our
    //           curated selection brings together the latest trends and timeless
    //           classics.
    //         </p>
    //         <div className="flex flex-wrap gap-4">
    //           {mainCategories.map((category) => (
    //             <button
    //               key={category}
    //               className={`border rounded px-4 py-2 text-sm sm:text-base hover:cursor-pointer ${
    //                 filter === category ? "bg-custom-gray" : "border-white"
    //               }`}
    //               onClick={() => handleFilterChange(category)}
    //             >
    //               {category}
    //             </button>
    //           ))}
    //         </div>
    //         <img
    //           src={img.src}
    //           alt="Fashion"
    //           className="sm:w-38 sm:h-40 absolute right-0 top-0 hidden md:block rotate-[-20.36]"
    //         />
    //       </div>

    //       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 mt-8">
    //         {filteredProducts.length > 0 && (
    //           <div>
    //             <h3 className="text-xl font-semibold mb-4">{filter}</h3>
    //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
    //               {filteredProducts.map((product) => (
    //                 <div
    //                   key={product.id}
    //                   className="cursor-pointer bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm border-dotted border-2 border-gray-600"
    //                   // onClick={() => handleClick(product.id)}
    //                 >
    //                   <div onClick={() => handleClick(product.id)}>
    //                     <img
    //                       src={product.image}
    //                       alt={product.name}
    //                       className="w-full h-64 object-cover rounded mb-4"
    //                     />
    //                   </div>
    //                   <div className="text-white p-4">
    //                     <div className="flex flex-wrap justify-between items-start mb-2">
    //                       {/* <p className="text-xs sm:text-sm bg-gray-700 inline-block px-2 py-1 rounded">
    //                         {product.category}
    //                       </p> */}
    //                       <button
    //                         className="bg-gray-600 text-white rounded px-3 py-1 text-xs sm:text-base hover:bg-gray-500 transition duration-200 hover:cursor-pointer"
    //                         onClick={() => handleClick(product.id)}
    //                       >
    //                         Shop Now
    //                       </button>
    //                       <button
    //                         onClick={() => handleAdd(product)}
    //                         className={`bg-gray-600 text-white rounded px-3 py-1 text-xs sm:text-base hover:bg-gray-500 transition duration-200 hover:cursor-pointer ${
    //                           disabledButtons[product.id]
    //                             ? "opacity-50 cursor-not-allowed"
    //                             : ""
    //                         }`}
    //                         disabled={!!disabledButtons[product.id]}
    //                       >
    //                         {disabledButtons[product.id]
    //                           ? "Already in Cart"
    //                           : "Add To Cart"}
    //                       </button>
    //                     </div>
    //                     <div onClick={() => handleClick(product.id)}>
    //                       <h3 className="text-base sm:text-lg font-semibold mb-2">
    //                         {product.name}
    //                       </h3>
    //                       <p className="text-gray-400 text-sm sm:text-base">
    //                         {product.description}
    //                       </p>
    //                       <p className="text-xl font-bold">{product.price}</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         )}

    //         {/* Render additional categories like ACCESSORIES and Bags */}
    //         {additionalCategories.map((category) => (
    //           <div key={category} className="mt-12">
    //             <h3 className="text-xl font-semibold mb-4">{category}</h3>
    //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
    //               {products
    //                 .filter((product) => product.category === category)
    //                 .map((product) => (
    //                   <div
    //                     key={product.id}
    //                     className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm border-dotted border-2 border-gray-600"
    //                   >
    //                     <img
    //                       src={product.image}
    //                       alt={product.name}
    //                       className="w-full h-64 object-cover rounded mb-4"
    //                     />
    //                     <div className="text-white p-4">
    //                       <div className="flex flex-wrap justify-between items-start mb-2">
    //                         <p className="text-xs sm:text-sm bg-gray-700 inline-block px-2 py-1 rounded">
    //                           {product.category}
    //                         </p>
    //                         <button
    //                           className="bg-gray-600 text-white rounded px-3 py-1 text-xs sm:text-base hover:bg-gray-500 transition duration-200 hover:cursor-pointer"
    //                           onClick={() => handleClick(product.id)}
    //                         >
    //                           Shop Now
    //                         </button>
    //                       </div>
    //                       <h3 className="text-base sm:text-lg font-semibold mb-2">
    //                         {product.name}
    //                       </h3>
    //                       <p className="text-gray-400 text-sm sm:text-base">
    //                         {product.description}
    //                       </p>
    //                       <p className="text-xl font-bold">{product.price}</p>
    //                     </div>
    //                   </div>
    //                 ))}
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
    // <section className="bg-black text-white py-20">
    //   <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative border-dotted border-2 border-gray-600 rounded-lg p-4">
    //     <h2 className="font-roboto text-3xl font-bold mt-2 leading-tight text-white">
    //       EXPLORE THE LATEST TRENDS AND TIMELESS CLASSICS
    //     </h2>
    //     <p className="text-gray-400 mb-4 text-base leading-normal mb-8">
    //       Dive into the world of fashion excellence at StyleLoom. Our curated
    //       selection brings together the latest trends and timeless classics.
    //     </p>
    //     <div className="flex flex-wrap gap-4">
    //       {["All", "Mens", "Womens", "Kids"].map((category) => (
    //         <button
    //           key={category}
    //           className={`border rounded px-4 py-2 text-sm sm:text-base hover:cursor-pointer ${
    //             filter === category ? "bg-custom-gray" : "border-white"
    //           }`}
    //           onClick={() => handleFilterChange(category)}
    //         >
    //           {category}
    //         </button>
    //       ))}
    //     </div>
    //     <img
    //       src={img.src}
    //       alt="Fashion"
    //       className="sm:w-38 sm:h-40 absolute right-0 top-0 hidden md:block rotate-[-20.36]"
    //     />
    //   </div>
    //   <div className="max-w-screen-xl mx-auto px-4 sm:px-6 mt-8">
    //     {filteredProducts.length > 0 && (
    //       <div id="Pro">
    //         <h3 className="text-xl font-semibold mb-4">{filter}</h3>
    //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
    //           {filteredProducts.map((product) => (
    //             <div
    //               key={product.id}
    //               className="cursor-pointer bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm border-dotted border-2 border-gray-600"
    //             >
    //               <div onClick={() => handleClick(product.id)}>
    //                 <img
    //                   src={product.image}
    //                   alt={product.name}
    //                   className="w-full h-64 object-cover rounded mb-4"
    //                 />
    //               </div>
    //               <div className="text-white p-4">
    //                 <div className="flex flex-wrap justify-between items-start mb-2">
    //                   <button
    //                     className="bg-gray-600 text-white rounded px-3 py-1 text-xs sm:text-base hover:bg-gray-500 transition duration-200 hover:cursor-pointer"
    //                     onClick={() => handleClick(product.id)}
    //                   >
    //                     Shop Now
    //                   </button>
    //                   <button
    //                     onClick={() => handleAdd(product)}
    //                     className={`bg-gray-600 text-white rounded px-3 py-1 text-xs sm:text-base hover:bg-gray-500 transition duration-200 hover:cursor-pointer ${
    //                       disabledButtons[product.id]
    //                         ? "opacity-50 cursor-not-allowed"
    //                         : ""
    //                     }`}
    //                     disabled={!!disabledButtons[product.id]}
    //                   >
    //                     {disabledButtons[product.id]
    //                       ? "Already in Cart"
    //                       : "Add To Cart"}
    //                   </button>
    //                 </div>
    //                 <div onClick={() => handleClick(product.id)}>
    //                   <h3 className="text-base sm:text-lg font-semibold mb-2">
    //                     {product.name}
    //                   </h3>
    //                   <p className="text-gray-400 text-sm sm:text-base">
    //                     {product.description}
    //                   </p>
    //                   <p className="text-xl font-bold">{product.price}</p>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </section>
//   );
// };

// export default Product_header;
