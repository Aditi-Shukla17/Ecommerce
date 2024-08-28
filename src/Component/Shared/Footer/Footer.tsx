import React from "react";

const Footer: React.FC = () => {
  return (
    <main className="mr-4 w-full">
      <footer className="bg-black mb-0 w-full text-gray-300 py-10  ">
        <div className="px-10 grid grid-cols-4 md:grid-cols-3 gap-8 mr-4">
          {/* Navigation Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Home</h2>
            <ul className="space-y-2 flex space-x-4">
              <a href="#" className="hover:text-white">
                Why Us
              </a>
              <a href="#" className="hover:text-white">
                About Us
              </a>
              <a href="#" className="hover:text-white">
                Testimonials
              </a>
              <a href="#" className="hover:text-white">
                FAQ's
              </a>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Products</h2>
            <ul className="space-y-2 flex space-x-4">
              <a href="#" className="hover:text-white">
                Menswear
              </a>
              <a href="#" className="hover:text-white">
                Womenswear
              </a>
              <a href="#" className="hover:text-white">
                Kidswear
              </a>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Subscribe to Newsletter
            </h2>
            <form>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-lg"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 bottom-0 px-4 bg-gray-600 hover:bg-gray-500 rounded-r-lg"
                >
                  →
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="px-4 text-center md:text-left">
          <p>© 2024 Styleloom. All rights reserved.</p>
          <div className="flex justify-center md:justify-end space-x-4 mt-4">
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Footer;

