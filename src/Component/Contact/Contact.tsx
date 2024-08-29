import React from "react";
import Image from "../../assets/image.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import ContactAndReturnPolicy from "./ContactInfo";
import Testimonial from "../Shared/Testimonial/Testimonial";
import FAQ from "../Shared/FAQ/Faq";
import Cta from "../Shared/CTA/Cta";

const Header: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <div className="bg-black text-white py-8 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="mt-40">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-center md:text-left">
            YOUR PARTNER IN EVERY STEP OF YOUR FASHION JOURNEY.
          </h1>
          <p className="text-sm md:text-base text-gray-400 text-center md:text-left">
            24/7 Assistance for Seamless Shopping and Unmatched Customer
            Satisfaction.
          </p>
        </div>
        <div className=" flex-shrink-0">
          <div className="hidden md:block w-24 h-24 md:w-32 md:h-10">
            <img
              src={Image.src}
              alt="Header Image"
              // className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <ContactAndReturnPolicy />

      {/* Testimonial Section */}
      <Testimonial />

      {/* FAQ Section */}
      <div className="relative bg-black text-white py-8 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-center md:text-left">
            HAVE QUESTIONS? WE HAVE ANSWERS
          </h1>
          <p className="text-sm md:text-base text-gray-400 text-center md:text-left">
            Ease into the world of styloom clarit. Our FAQ cover a spectrum of
            topics.
          </p>
          <div className="flex flex-wrap justify-around mt-8 mb-6">
            <button className="text-gray-400 border-b-2 border-transparent hover:border-white focus:border-white px-4 py-2">
              All
            </button>
            <button className="text-gray-400 border-b-2 border-transparent hover:border-white focus:border-white px-4 py-2">
              Ordering
            </button>
            <button className="text-gray-400 border-b-2 border-transparent hover:border-white focus:border-white px-4 py-2">
              Shipping
            </button>
            <button className="text-gray-400 border-b-2 border-transparent hover:border-white focus:border-white px-4 py-2">
              Returns
            </button>
            <button className="text-gray-400 border-b-2 border-transparent hover:border-white focus:border-white px-4 py-2">
              Support
            </button>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="hidden md:block w-24 h-24 md:w-32 md:h-32">
            <img
              src={Image3.src}
              alt="FAQ Image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <FAQ />
      <Cta />
    </>
  );
};

export default Header;
