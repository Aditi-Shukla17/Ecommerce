import React from "react";
import Image3 from "@/assets/image3.png";

const faqData = [
  {
    title: "How can I place an order on StyleLoom?",
    content:
      "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
  },
  {
    title: "Can I modify or cancel my order after placing it?",
    content:
      "Unfortunately, once an order is confirmed, modifications or cancellations may not be possible. Please review your order carefully before completing the purchase.",
  },
  {
    title: "What payment methods do you accept?",
    content:
      "We accept a variety of payment methods, including credit/debit cards, net banking, and select digital wallets. Choose the option that suits you best during checkout.",
  },
  {
    title: "How do I initiate a return?",
    content:
      "Visit our Returns page and follow the provided instructions. Ensure your item meets our return criteria, and our team will guide you through the process.",
  },
  {
    title: "How can I track my order?",
    content:
      "Once your order is dispatched, you'll receive a tracking number via email. Use this number to track your package in real-time on our website.",
  },
  {
    title: "Do you offer exchanges for products?",
    content:
      "At this time, we don't offer direct product exchanges. If you'd like a different item, please initiate a return and place a new order.",
  },
];

const FAQ = () => {
  return (
    <div className="bg-black w-full h-auto ">
      <div className="min-h-screen bg-black text-white max-w-screen-xl mx-auto px-4">
        <div className="border-dotted border-2 border-gray-600 p-8 rounded-xl flex flex-col lg:flex-row items-center justify-between">
          <div className="text-left mb-6 lg:mb-0 mt-10 lg:mt-0">
            <h2 className="text-3xl font-bold mb-2">
              HAVE QUESTIONS? WE HAVE ANSWERS.
            </h2>
            <p className="text-gray-400">
              Ease into the world of StyleLoom with clarity. Our FAQ cover a
              spectrum of topics.
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
          <div className="w-32 h-32 lg:w-40 lg:h-40 hidden md:block">
            <img
              src={Image3.src}
              alt="Design Element"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
          <div className="border-dotted  border-2 border-gray-600 p-8 rounded-xl w-full max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-black-800 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.title}</h3>
                  <p className="text-gray-400">{faq.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
