import React from 'react';

const Middle1: React.FC = () => {
  return (
    <div className="bg-black text-white w-[full] py-12 mt-10"> {/* Added mt-16 to start below the navbar */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Top Section - Full Width Image */}
        <div className="relative w-full h-[500px] lg:h-[600px] mb-12"> {/* Added mb-12 for spacing */}
          <img
            src="https://s3-alpha-sig.figma.com/img/f809/5e6d/55a76e6cff424c50ed846cf8bb2e8423?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MdnQJgH9i6vq4WydCMyyzipaMbdpDkY31UWuoEot0gdx2NsRzRdXMq0sTPaW3el5fzlWfZmT0QY9ybwsFDXVHiA1dFviW1JbJ72uP9qcZKu4Y9nQuv-N8nnoFH~zA7lVrpP5LyTnhWsXeYI-rv2ZIt7DcwaJZPBkTvpx2RAMNg2pYxJeAhVURIv9ueq3x7kdSRStccST5e4aA1HHfMyWoRWh8gb9yR-a9X7gkr06b-ojnsclSD8ZlQvdc6LqXRtPy9TSajEXssar37hcMddtfyHS9wumKrdUfk-vemCc-K7vi-rUjGsIi7Y-75pcJpNo-jQbmBF66pnMo096EdyeJg__"
            alt="Fashion"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="bg-black text-white px-6 py-3 rounded-lg mt">
              Shop Now
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          {/* Filters and Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Filters and Text */}
            <div>
              {/* Filter Buttons */}
              <div className="flex space-x-4 mb-6 justify-center lg:justify-start">
                <button className="border border-gray-600 px-4 py-2 rounded-md">All</button>
                <button className="border border-gray-600 px-4 py-2 rounded-md">Mens</button>
                <button className="border border-gray-600 px-4 py-2 rounded-md">Womens</button>
                <button className="border border-gray-600 px-4 py-2 rounded-md">Kids</button>
              </div>

              {/* Text Section */}
              <h2 className="text-3xl font-bold text-center lg:text-left mb-4">
                ELEVATE YOUR STYLE WITH STYLELOOM
              </h2>
              <p className="text-lg text-center lg:text-left">
                Explore a world of fashion at StyleLoom, where trends meet affordability. 
                Immerse yourself in the latest styles and seize exclusive promotions.
              </p>
            </div>

            {/* Right Column - Statistics */}
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <span className="block text-4xl font-bold">1,500+</span>
                <span className="block mt-2">Fashion Products</span>
              </div>
              <div>
                <span className="block text-4xl font-bold">50+</span>
                <span className="block mt-2">New arrivals every month.</span>
              </div>
              <div>
                <span className="block text-4xl font-bold">30%</span>
                <span className="block mt-2">OFF on select items.</span>
              </div>
              <div>
                <span className="block text-4xl font-bold">95%</span>
                <span className="block mt-2">Customer Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle1;
