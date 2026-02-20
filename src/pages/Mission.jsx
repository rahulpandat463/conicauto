import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Mission = () => {
  const imageRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      imageRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(
            ref,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: index * 0.2 }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const sections = [
    {
      title: "Mission",
      image: "/src/assets/images/vision.jpg",
      content: "\"Our mission is to design, manufacture, and deliver high-performance automotive components—gaskets, rubber parts, and seals—that meet global standards. We are committed to continuous improvement, swift delivery, transparent communication, and customized solutions that adapt to evolving customer needs. Through operational excellence and a customer-first approach, we aim to strengthen trust, expand our global footprint, and drive long-term success.\""
    },
    {
      title: "Vision",
      image: "",
      content: "\"To build enduring global partnerships by being the most responsive, trustworthy, and performance-driven manufacturer of automotive gaskets, seals, and rubber parts—delivering unmatched customer experience through innovation, agility, and a commitment to excellence.\""
    },
    {
      title: "Commitment",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      content: "QUALITY TRUST CUSTOMER FIRST"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Background Image */}
      <div
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486262715619-01b802457299?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Vision / Mission / Commitment
          </h1>
        </div>
      </div>

      {/* Bold Centered Content */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
            With a commitment to innovation, precision, and sustainability, we strive to exceed customer expectations, empower our employees, and contribute to technological advancement worldwide.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-24 pb-24">
        {sections.map((section, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div ref={(el) => (imageRefs.current[index] = el)} className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-2xl font-bold text-gray-900">
                {section.title}
              </h2>
              {index < 2 ? (
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {section.content}
                </p>
              ) : (
                <p className="text-gray-400 text-sm font-bold tracking-widest uppercase">
                  {section.content}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;

