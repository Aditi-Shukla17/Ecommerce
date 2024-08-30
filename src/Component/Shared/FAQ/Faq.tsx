import React from "react";
// import Image2 from "../../assets/image2.png";
import Image3 from "../../../assets/image3.png";

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
      "Once your order is dispatched, you’ll receive a tracking number via email. Use this number to track your package in real-time on our website.",
  },
  {
    title: "Do you offer exchanges for products?",
    content:
      "At this time, we don’t offer direct product exchanges. If you’d like a different item, please initiate a return and place a new order.",
  },
];

const FAQ = () => {
  return (
    <>
      {/* <div> */}
      <section className="bg-black text-white py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="border-dotted border-2 border-gray-600 p-8 rounded-xl flex flex-col lg:flex-row items-center justify-between">
            <div className="text-left mb-6 lg:mb-0">
              <h1 className="text-3xl font-bold mb-2">
                HAVE QUESTIONS? WE HAVE ANSWERS
              </h1>
              <p className="text-gray-400">
                Ease into the world of styloom clarit. Our FAQ cover a spectrum
                of topics.
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
        </div>
        <div className=" min-h-screen bg-black text-white flex items-center justify-center p-6">
          <div className="border-dotted border-2 border-gray-600 p-8 rounded-xl  w-full max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
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
      </section>
    </>
  );
};

export default FAQ;
