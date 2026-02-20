import React from 'react';
import historyVideo from '../assets/videos/Other-video1.mp4';
import historyImage from '../assets/images/history(1).jpg';

const History = () => {
  const timelineData = [
    {
      year: "1989",
      title: "Beginning",
      content: "Conic was founded by Narulas, with a vision to provide high-quality gaskets for various industrial applications. Starting was modest with 2 workers working on wooden tools."
    },
    {
      year: "1994",
      title: "Upgrade",
      content: "Conic introduces its first electrical operated press and started making head gaskets on steel tools, focusing on standard sizes and materials commonly used in automotive and machinery industries."
    },
    {
      year: "1999",
      title: "Screen Printing on Gaskets",
      content: "Conic started screen printing of head GASKETS and exhaust and started first import in 1999 for RTV, WACKER from Germany."
    },
    {
      year: "2002",
      title: "Capacity Expansion",
      content: "Conic underwent an expansion effort to reflect its evolution into a leader in gasket manufacturing and technology. The rebranding was accompanied by the construction of a state-of-the-art manufacturing facility that has total area of more than 22,000 Sq. Ft. in IMT MANESAR, Haryana, 40 Kms away from New Delhi's Indira Gandhi Airport."
    },
    {
      year: "2004",
      title: "Technical Upgrade",
      content: "To meet technical demand, Conic opens its first tool room in manufacturing facility, equipped with advanced machinery for improved production efficiency. The company adopts CNC and VMC to enhance precision in gasket design and manufacturing."
    },
    {
      year: "2007",
      title: "Portfolio Expansion",
      content: "Conic understands the need of Gaskets industry for better Sealings and established Rubber moulding plant."
    },
    {
      year: "2010",
      title: "Advance Setup for Rubber Gaskets",
      content: "A new state-of-the-art facility is established to accommodate growing demand and advanced manufacturing techniques in Rubber Gaskets. We imported advanced machinery from TAIWAN for manufacturing of Rubber Gaskets."
    },
    {
      year: "2014",
      title: "Portfolio Expansion",
      content: "Gaskets with PTFE coating are sought after in various industries for their enhanced sealing capabilities, chemical resistance, and durability. We started catering to this demand and started the PTFE coating on Gaskets."
    },
    {
      year: "2015",
      title: "Added New Plant",
      content: "Conic established successfully the new plant to manufacturing Edge moulded gaskets in FKM, Silicon, HNBR, NBR, EPDM & ACM."
    },
    {
      year: "2019",
      title: "MLS Exhaust",
      content: "Multi-Layer Steel (MLS) exhaust gaskets are specialized gaskets used in automotive exhaust systems to create a leak-free seal between various exhaust components. We introduced MLS exhaust gaskets to meet the market demand."
    },
    {
      year: "2023",
      title: "MLS Head Gaskets",
      content: "The demand for Multi-Layer Steel (MLS) gaskets has grown significantly in recent years, driven by advancements in automotive technology. Conic has started MLS head gaskets manufacturing in 2023."
    },
    {
      year: "2025",
      title: "Laser Cutting",
      content: "We introduced high tech Laser cutting machines for making Metal gaskets."
    }
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <div className="relative h-[400px] overflow-hidden">

        <img
          src={historyImage}
          alt="History"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center">
            History
          </h1>
        </div>

      </div>


      {/* Bold Centered Content */}
      <div className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
            With a commitment to innovation, precision, and sustainability, we strive to exceed customer expectations, empower our employees, and contribute to technological advancement worldwide.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 relative items-start">
            {/* Left Side - Timeline */}
            <div className="space-y-16">

              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[90px_1fr] gap-12 items-start"
                >

                  {/* YEAR */}
                  <div className="text-[18px] font-medium text-gray-900 pt-1">
                    {item.year}
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className="text-[20px] font-medium text-black mb-3">
                      {item.title}
                    </h3>

                    <p className="text-[14px] text-gray-600 leading-[1.8] max-w-[520px]">
                      {item.content}
                    </p>
                  </div>

                </div>
              ))}

            </div>


            {/* Right Side - Sticky Video */}
            <div className="hidden lg:block w-96 shrink-0 sticky top-24">
              <div className="rounded-2xl shadow-xl overflow-hidden h-[600px] border-4 border-white bg-white">

                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={historyVideo} type="video/mp4" />
                </video>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default History;
