import React from "react";

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
    <div className=" min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="border-dotted border-2 border-gray-600 p-8 rounded-xl  w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-black-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">{faq.title}</h3>
              <p className="text-gray-400">{faq.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
