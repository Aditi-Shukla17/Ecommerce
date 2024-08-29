import React from "react";
import img1 from "../../../assets/bg1.png"; 
import icon from "../../../assets/Icon.png";
import shape from "../../../assets/Shape.png";
import { testimonials } from "./data";

const Testimonial: React.FC = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        
        {/* Upper Section */}
        <div className="border-dotted border-2 border-gray-600 p-8 rounded-xl flex flex-col lg:flex-row items-center justify-between">
          <div className="text-left mb-6 lg:mb-0">
            <h2 className="text-3xl font-bold mb-2">
              THE STYLELOOM TESTIMONIAL COLLECTION.
            </h2>
            <p className="text-gray-400">
              At StyleLoom, our customers are the heartbeat of our brand.
            </p>
          </div>
          <div className="w-32 h-32 lg:w-40 lg:h-40 hidden md:block ">
            <img
              src={img1.src}
              alt="Design Element"
              className="object-cover w-full h-full "
            />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="border-dotted border-2 border-gray-600 p-8 rounded-xl mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border-dotted border-2 border-gray-600 p-6 rounded-lg bg-gray-900 bg-opacity-80 shadow-lg flex flex-col"
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

      </div>
    </section>
  );
};

export default Testimonial;