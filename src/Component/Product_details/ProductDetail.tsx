import React from "react";
import img from "./img/image.png";
import img1 from "./img/img3.png";
import star1 from "./img/star.png";
import line from "./img/line.png";
const ProductDetail: React.FC = () => {
  return (
    <section className="bg-black text-white py-10 sm:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 border-dotted border-2 border-gray-600 rounded-lg p-4 flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-col sm:flex-grow">
          <h2 className="font-roboto text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight mb-4 text-white">
            ELEGANT EVENING GOWN
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <p className="text-left font-roboto text-base sm:text-lg lg:text-xl text-gray-400">
              Fitted bodice, flowing skirt
            </p>
            <p className="text-left font-roboto text-base sm:text-lg lg:text-xl text-green-200 bg-gray-700 rounded px-2 py-1">
              In stock
            </p>
          </div>
        </div>

        <div>
          <button className="bg-gray-600 text-white rounded px-4 py-2 hover:bg-gray-500 transition duration-200 m-5">
            Add To Cart
          </button>
          <button className="bg-gray-700 text-white rounded px-4 py-2 hover:bg-gray-600 transition duration-200">
            Shop Now
          </button>
        </div>
      </div>

      <div className="bg-black p-4 sm:p-6 max-w-screen-xl mx-auto mt-6  border-dotted border-2 border-gray-600 border-b-0 ">
        <div className="grid grid-flow-col  gap-4 h-auto ">
          <div className="col-span-2 border-dotted border-2 border-gray-600 rounded-lg overflow-hidden  w-full">
            <img
              src={img.src}
              alt="Main Outfit"
              className="object-cover w-full h-full"
            />
          </div>

          <div className=" grid grid-rows-2 gap-4 ">
            <div className="border-dotted border-2 border-gray-600 rounded-lg overflow-hidden ">
              <img
                src={img.src}
                alt="Side Outfit 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="border-dotted border-2 border-gray-600 rounded-lg overflow-hidden ">
              <img
                src={img.src}
                alt="Side Outfit 2"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white  max-w-screen-xl mx-auto  border-dotted border-2 border-gray-600 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* Left Section */}
          <div className="">
            <h2 className="text-xl sm:text-2xl font-bold mb-6  ml-5 mt-7 p-6">
              Materials, Care and Origin
            </h2>
            <div className=" border-dotted border-2 border-gray-600 border-l-0 border-r-0 p-12 ">
              <h3 className="text-lg font-semibold mb-2">Join Life</h3>
              <p className="text-gray-400 mb-4">
                Tracing its roots back to ancient Greek draped garments, it has
                evolved through centuries, often crafted from luxurious fabrics
                like silks, satins, and velvets.
              </p>
            </div>
            <div className="p-12">
              <h3 className="text-lg font-semibold mb-2">Materials</h3>
              <p className="text-gray-400 mb-4">
                Flowing from Grecian folds to glittering silks, the evening gown
                has graced centuries in luxury.
              </p>
              <img
                src={img1.src}
                alt="Materials"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="border-dotted border-2 border-gray-600 ">
            <div className=" p-12">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Features</h2>
              <ul className="list-disc list-inside text-gray-400">
                <li>Distressed detailing for a rugged look</li>
                <li>Button-up front closure with engraved metal buttons</li>
                <li>Two chest pockets with buttoned flaps</li>
                <li>Two side pockets for added functionality</li>
                <li>Adjustable buttoned cuffs for a personalized fit</li>
                <li>Back waist tabs for customizable styling</li>
              </ul>
            </div>

            <div className=" border-dotted border-l-0 border-r-0 border-b-0 border-2  border-gray-600 flex flex-col sm:flex-row justify-between">
              <div className="p-12">
                <h3 className="text-xl font-bold mb-2">Price</h3>
                <p className="text-2xl mb-4 ">
                  $89.99{" "}
                  <span className="text-gray-400 text-sm ml-1 ">
                    (MRP incl. of all taxes)
                  </span>
                </p>
              </div>
              <div className="p-5 sm:p-14 ">
                <button className="bg-gray-700 text-white rounded p-5 sm:py-2 sm:px-4 hover:bg-gray-600 transition duration-200 w-full sm:w-40">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="border-dotted border-2 border-gray-600  border-l-0 border-r-0 p-12">
              <h3 className="text-xl font-bold mb-2">Available Sizes</h3>
              <div className="flex space-x-2 gap-1 ">
                <span className="border border-gray-600 rounded-xl px-4 py-1">
                  S
                </span>
                <span className="border border-gray-600 rounded-xl px-4 py-1">
                  M
                </span>
                <span className="border border-gray-600 rounded-xl px-4 py-1">
                  L
                </span>
                <span className="border border-gray-600 rounded-xl px-4 py-1">
                  XL
                </span>
              </div>
            </div>
            <div className="p-12 border-dotted border-2 border-gray-600  border-l-0 border-r-0">
            <h3 className="text-xl font-bold mb-2">Ratings & Review</h3>
            </div>
            <div className="p-12 flex flex-col  sm:flex-row justify-start sm:justify-between  ">
              <div className="flex flex-row sm:flex-col">
               
                <p className="text-white text-5xl mb-2">4.8</p>
                
                <div className="flex space-x-1">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <span key={star} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 mb-4">(49 Ratings)</p>
              </div>
              <div className="p-4 flex flex-col">
                <div className="flex-1 flex flex-col items-start justify-start gap-3 min-w-[224px] max-w-full text-base text-grey-50 font-roboto">
                  {[5,4,3,2,1].map((star, index) => (
                    <div
                      key={index}
                      className="self-stretch flex flex-row items-start justify-start gap-4 mq450:flex-wrap"
                    >
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <img
                          className="w-5 h-5 relative rounded-12xs"
                          alt=""
                          src={star1.src}
                        />
                      </div>
                      <div className="relative leading-[150%] inline-block min-w-[18px] mq450:w-full mq450:h-[18px]">
                        {star.toString().padStart(2, "0")}
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[179px]">
                        <div className="self-stretch rounded-3xl bg-dark-10 border-gray-700 bg-gray-700 border-[1px] border-solid flex flex-row items-start justify-start py-1 px-1.5">
                          <img
                            src={line.src}
                            alt=""
                            className="h-1 relative rounded-81xl bg-brown-60"
                            style={{ width: `${star * 44 }px` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

