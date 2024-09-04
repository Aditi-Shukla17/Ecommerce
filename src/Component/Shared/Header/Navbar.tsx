"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { openDialog, closeDialog, CartState } from "@/Redux/CartSlice";
import { RootState } from "@/Redux/Store";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();
  const { open, selectedProduct, count } = useSelector(
    (state: RootState) => state.cart
  );

  const handleAddToCart = (productId: number) => {
    console.log(productId); // Log the product ID to ensure it's correctly passed
    dispatch(openDialog(productId));
  };

  const removeFromCart = () => {
    dispatch(closeDialog());
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={() => dispatch(closeDialog())}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-lg font-medium text-gray-900">
                        Shopping cart
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => dispatch(closeDialog())}
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                        </button>
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="flow-root">
                        {selectedProduct && (
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            <li className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  alt={selectedProduct.description}
                                  src={selectedProduct.image}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href={selectedProduct.category}>
                                        {selectedProduct.name}
                                      </a>
                                    </h3>
                                    <p className="ml-4">
                                      {selectedProduct.price}
                                    </p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {selectedProduct.description}
                                  </p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">Qty 1</p>
                                  <div className="flex">
                                    <button
                                      onClick={removeFromCart}
                                      type="button"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>$262.00</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Checkout
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{" "}
                        <button
                          type="button"
                          onClick={() => dispatch(closeDialog())}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
      <header className="fixed top-0 left-0 w-full z-50 bg-black">
        <nav className="flex justify-between items-center w-full p-2 text-white px-4 sm:px-12">
          {/* Left Section */}
          <div className="sm:flex items-center gap-4 hidden order-1">
            <a href="/home">
              <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 hover:scale-105 transition duration-200">
                Home
              </button>
            </a>
            <a href="/product">
              <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 hover:scale-105 transition duration-200">
                Product
              </button>
            </a>
          </div>

          {/* Center Section (Brand Name) */}
          <div className="text-white text-lg sm:text-xl font-bold flex-grow sm:flex-grow-0 sm:order-2 sm:mx-auto">
            <span className="sm:text-center sm:w-auto sm:pl-0">Style.Loom</span>
          </div>

          {/* Right Section */}
          <div className="hidden sm:flex items-center gap-4 order-3">
            <button
              className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 hover:scale-105 transition duration-200"
              onClick={handleAddToCart} // Replace '1' with the actual product ID
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l1.38-5H8.62M7 13l-2 8h12l2-8M7 13L5.62 5M8.62 8h10.76M17 16a1 1 0 102 0 1 1 0 00-2 0z"
                />
              </svg>
              <span className="ml-2">{count}</span>
            </button>
            <a href="/contact">
              <button className="bg-[#c3a688] text-black py-2 px-4 rounded-md hover:bg-[#a78b66] hover:scale-105 transition duration-200">
                Contact
              </button>
            </a>
          </div>

          {/* Hamburger Menu for smaller screens */}
          <button
            className="sm:hidden bg-gray-800 text-white py-2 px-3 rounded-md hover:bg-gray-700 hover:scale-105 transition duration-200 order-2"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Dropdown Menu for smaller screens */}
        {isOpen && (
          <div className="sm:hidden bg-black text-white flex flex-col items-center p-4">
            <a href="/home" className="py-2">
              Home
            </a>
            <a href="/product" className="py-2">
              Product
            </a>
            <a href="/contact" className="py-2">
              Contact
            </a>
            <button
              className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 hover:scale-105 transition duration-200 mt-4"
              onClick={() => handleAddToCart(1)} // Replace '1' with the actual product ID
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l1.38-5H8.62M7 13l-2 8h12l2-8M7 13L5.62 5M8.62 8h10.76M17 16a1 1 0 102 0 1 1 0 00-2 0z"
                />
              </svg>
              <span className="ml-2">{count}</span>
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
