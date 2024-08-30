import React from "react";
import img1 from "../../../assets/bg1.png"; 
import icon from "../../../assets/Icon.png";
import shape from "../../../assets/Shape.png";
import { testimonials } from "./data";
import line from "./img/line.png"
import line1 from "./img/line2.png"
import line3 from "./img/line1.png"
import line4 from "./img/line4.png"
const Testimonial: React.FC = () => {
  return (
    <section className="bg-black text-white py-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="p-8 flex flex-col lg:flex-row items-center justify-between border-2 border-gray-700 border-dotted">
          <div className="text-left mb-6 lg:mb-0">
            <h2 className="text-3xl font-bold mb-2">
              THE STYLELOOM TESTIMONIAL COLLECTION.
            </h2>
            <p className="text-gray-400">
              At StyleLoom, our customers are the heartbeat of our brand.
            </p>
          </div>
          <div className="w-32 h-32 lg:w-40 lg:h-40 hidden md:block">
            <img
              src={img1.src}
              alt="Design Element"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l-2 border-gray-700 border-dotted relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 bg-black bg-opacity-80 flex flex-col border-dotted border-r-2 border-b-2 border-gray-600 shadow-lg"
            >
              {testimonial.id === 1 && (
                <div className="flex gap-1 absolute left-0 bottom-0 w-10 h-10 overflow-hidden">
                  <img src={line.src} alt="" />
                    </div>
              )}
              {testimonial.id === 3 && (
                <div className="flex gap-1 absolute right-0 bottom-0 w-10 h-10 overflow-hidden">
                 <img src={line3.src} alt="" />
                </div>
              )}
              {testimonial.id === 4 && (
                <div className="flex gap-1 absolute left-0 top-0 w-10 h-10 overflow-hidden">
                  <img src={line1.src} alt="" />
                 
                </div>
              )}
              {testimonial.id === 6 && (
                <div className="flex gap-1 absolute right-0 top-0 w-10 h-10 overflow-hidden">
                <img src={line4.src} alt="" />
                </div>
              )}

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
                  <img
                    key={i}
                    src={shape.src}
                    alt="Star"
                    className="w-5 h-5"
                  />
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
