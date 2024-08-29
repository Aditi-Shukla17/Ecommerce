import React from "react";
import Image from "../../assets/image.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import ContactAndReturnPolicy from "./ContactInfo";
import Testimonial from "../Shared/Testimonial/Testimonial";
import FAQ from "../Shared/FAQ/Faq";
// import FAQ from "../../Component/Shared/FAQ";

const Header: React.FC = () => {
  return (
    <>
      <div className="relative bg-black text-white py-8 px-4 md:px-16 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            YOUR PARTNER IN EVERY STEP OF YOUR FASHION JOURNEY.
          </h1>
          <p className="text-sm md:text-base text-gray-400">
            24/7 Assistance for Seamless Shopping and Unmatched Customer
            Satisfaction.
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-[url('/project/src/assets/image.png')] bg-no-repeat bg-contain">
            <img src={Image.src}></img>
          </div>
        </div>
      </div>
      <ContactAndReturnPolicy />

      {/* Testimonial Here */}
      <Testimonial />
      <div className="relative bg-black text-white py-8 px-4 md:px-16 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            HAVE QUESTIONS? WE HAVE ANSWERS
          </h1>
          <p className="text-sm md:text-base text-gray-400">
            Ease into the world of styloom clarit. Our FAQ cover a spectrum of
            topics.
          </p>
          <div className="flex justify-around mt-8 mb-6">
            <button className="text-gray-400 border-b-2 border-transparent hover:bg:red">
              All
            </button>
            <button className="text-gray-400 border-b-2 border-transparent hover:border-white">
              Ordering
            </button>
            <button className="text-gray-400 border-b-2 border-transparent hover:border-white">
              Shipping
            </button>
            <button className="text-gray-400 border-b-2 border-transparent hover:border-white">
              Returns
            </button>
            <button className="text-gray-400 border-b-2 border-transparent hover:border-white">
              Support
            </button>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-[url('/project/src/assets/image.png')] bg-no-repeat bg-contain">
            <img src={Image3.src}></img>
          </div>
        </div>
      </div>
      <FAQ />
    </>
  );
};

export default Header;
