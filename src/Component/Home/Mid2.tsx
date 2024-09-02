

import React from 'react';

interface CardData {
  title: string;
  description: string;
  icon: JSX.Element;
}

const cardData: CardData[] = [
  {
    title: "Passionate Craftsmanship",
    description: "Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.",
    icon: <span className="text-3xl border border-dotted rounded-full">⭐</span>,
  },
  {
    title: "Fashion Forward",
    description: "We're more than a brand; we're trendsetters, curating styles that empower and inspire confidence.",
    icon: <span className="text-3xl border border-dotted rounded-full">👗</span>,
  },
  {
    title: "Customer-Centric Approach",
    description: "At StyleLoom, our customers are at the heart of everything we do. Your satisfaction is our measure of success.",
    icon: <span className="text-3xl border border-dotted rounded-full">😊</span>,
  },
  {
    title: "Global Inspiration",
    description: "Influenced by global trends, we bring you a diverse and dynamic collection, embodying the spirit of fashion from around the world.",
    icon: <span className="text-3xl border border-dotted rounded-full">🌍</span>,
  },
  {
    title: "Empowering Your Style",
    description: "Beyond clothing, StyleLoom is a lifestyle. Join us on a journey of self-expression and empowerment through fashion.",
    icon: <span className="text-3xl border border-dotted rounded-full">💪</span>,
  },
  {
    title: "Sustainable Practices",
    description: "StyleLoom is committed to sustainability, integrating eco-friendly practices into our production process.",
    icon: <span className="text-3xl border border-dotted rounded-full">🌱</span>,
  },
];

const Midd2: React.FC = () => {
  return (
    <div className="bg-black w-full">
      <div className=" bg-black max-w-screen-xl mx-auto px-4">
      <div className="border-2 border-dotted border-gray-700 p-4 max-w-7xl mx-auto rounded-lg">
        <div className="bg-gray-900 text-white p-8">
          <h2 className="text-3xl font-bold mb-4">CRAFTING TRENDS, INSPIRING CONFIDENCE</h2>
          <p className="mb-8">Explore a world of fashion at StyleLoom, where trends meet affordability.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardData.map((card, index) => (
              <div key={index} className="border border-dotted border-gray-700 p-4 rounded-md">
                <div className="text-center mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Midd2;

