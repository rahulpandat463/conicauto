import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What does CONIC do?",
      answer: "CONIC specializes in the production and distribution of high-quality gaskets and sealing solutions for various industries. We offer a wide range of gasket materials and types to meet our customers' specific needs."
    },
    {
      question: "What industries do you serve?",
      answer: "Our gaskets are utilized in a broad range of industries, including automotive, aerospace, oil and gas, marine, and more. Our products cater to both industrial and commercial applications."
    },
    {
      question: "What materials are used in your gaskets?",
      answer: "Our gaskets are made from a variety of materials including rubber, silicone, PTFE, and composite materials, depending on the specific application and performance requirements."
    },
    {
      question: "DDo you provide international shipping??",
      answer: "Yes, we ship our gaskets worldwide. We have a robust logistics network to ensure timely and safe delivery to your location."
    }
  ];

  const cards = [
    {
      title: "MISSION",
      image: "/src/assets/images/vision.jpg",
      description: "\"Our mission is to design, manufacture, and deliver high-performance automotive components—gaskets, rubber parts, and seals—that meet global standards. We are committed to continuous improvement, swift delivery, transparent communication, and customized solutions that adapt to evolving customer needs. Through operational excellence and a customer-first approach, we aim to strengthen trust, expand our global footprint, and drive long-term value for our clients and the industry.\""
    },
    {
      title: "VISION",
      image: "https://images.unsplash.com/photo-1454165833767-027ffea9e78b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "\"To build enduring global partnerships by being the most responsive, trustworthy, and performance-driven manufacturer of automotive gaskets, seals, and rubber parts—delivering unmatched customer experience through innovation, agility, and a commitment to excellence.\""
    },
    {
      title: "VALUES",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "QUALITY TRUST CUSTOMER FIRST"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Top Header Section */}
      <div className="pt-20 pb-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          About Us
        </h1>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="md:col-span-1 shadow-sm opacity-10">
              {/* Left spacer matching reference layout density */}
            </div>

            {/* Right Content */}
            <div className="md:col-span-11 md:pl-12">
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium max-w-2xl">
                <span className="text-gray-600 font-bold">CONIC AUTOMOTIVE</span> is an ISO 9001:2015 certified organization
                established in the year 1989 in New Delhi, INDIA. We are
                specialized in manufacturing Multi-layer Gaskets, Edge
                Moulded Gaskets, Non-Asbestos Gaskets, PTFE Gaskets, Oil
                seals, Valve stem Seals, Rubber Parts and Sheet Metal parts.
                With a strong team of more than 120, our manufacturing unit
                has spread over the area of 22,000 sq.ft.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-12 px-6 pb-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div key={index} className="bg-gray-50 rounded-[32px] overflow-hidden p-4 flex flex-col h-full transform transition-all duration-300 hover:shadow-xl group">
                {/* Image Container */}
                <div className="rounded-2xl overflow-hidden mb-6 aspect-[4/3]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="px-2 pb-4 flex-grow">
                  {index < 2 ? (
                    <p className="text-gray-500 text-[13px] leading-relaxed font-normal">
                      {card.description}
                    </p>
                  ) : (
                    <h3 className="text-gray-600 font-bold text-sm tracking-wider uppercase">
                      {card.description}
                    </h3>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
