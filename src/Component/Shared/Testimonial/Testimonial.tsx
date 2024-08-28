import React from "react";
import img1 from "../../../assets/bg1.png"; // Background image
import icon from "../../../assets/Icon.png";
import shape from "../../../assets/Shape.png";
import { testimonials } from "./data";

const Testimonial: React.FC = () => {
  return (
    <section className="bg-black text-white py-12 relative flex justify-center ">
      <div className="absolute top-0 hidden md:block " />
      <div className="bg-black bg-opacity-50 py-12 w-[90%]">
        <div className="max-w-7xl px-4 sm:px-6">
          <h2 className="font-roboto text-3xl sm:text-4xl lg:text-4xl font-medium leading-tight mb-4 text-white">
            THE STYLELOOM TESTIMONIAL COLLECTION.
          </h2>
          <p className="text-left mb-12 font-roboto text-lg sm:text-base lg:text-base text-gray-400">
            At StyleLoom, our customers are the heartbeat of our brand.
          </p>

          <img
            src={img1.src}
            alt="Background"
            className="w-40 h-40 sm:w-36 sm:h-36 absolute right-20 top-20 hidden md:block" // Hide on mobile, show on medium and larger screens
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {" "}
          {/* Added gap for spacing */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 bg-opacity-80 p-6 shadow-lg flex flex-col"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="flex justify-between items-center w-full">
                  <div className="w-3/4">
                    <h4 className="text-lg sm:text-xl font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm sm:text-base">
                      {testimonial.location}
                    </p>
                  </div>
                  <a href="#" className="flex-shrink-0">
                    <img src={icon.src} className="w-8 h-8" alt="Icon" />
                  </a>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <img key={i} src={shape.src} alt="Star" className="w-5 h-5" />
                ))}
              </div>
              <p className="text-base text-gray-400">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
