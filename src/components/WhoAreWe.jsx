import React from "react";

const WhoAreWe = () => {
  return (
    <section className="py-24 bg-[#e9e9e9]">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">

          {/* LEFT SIDE */}
          <div className="max-w-[520px]">
            
            {/* Top Small Line */}
            <div className="w-20 h-[2px] bg-blue-900 mb-8"></div>

            <h2 className="text-[38px] font-light text-black mb-8">
              Who are we
            </h2>

            <div className="space-y-6 text-[15px] text-gray-700 leading-[1.9]">
              <p>
                Founded in 1989 during a time of rapid industrial growth and innovation,
                the Narula brothers established a gasket manufacturing company
                that would go on to redefine industry standards. With a strong
                foundation in mechanical engineering and a passion for precision,
                the founders identified a critical gap in the market: the need
                for high-quality, reliable gaskets capable of meeting the
                rigorous demands of sectors such as automotive and petrochemical industries.
              </p>

              <p>
                "Conic" began its journey in a modest facility in Delhi. Backed
                by a small yet skilled team of engineers and technicians, the
                company set out to develop gaskets known for their exceptional
                performance, durability, and versatility. The early years were
                characterized by relentless research and development as the team
                refined manufacturing techniques and sourced premium materials
                to ensure superior product quality.
              </p>

              <p>
                Over time, Conic expanded its offerings to serve a broader range
                of industries, including marine and petrochemicals. Its unwavering
                commitment to quality control and continuous innovation earned
                the company multiple certifications and industry accolades,
                firmly establishing Conic as a trusted provider of advanced gasket solutions.
              </p>
            </div>

            <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-4 rounded-full text-sm tracking-wide transition-all">
              Read More
            </button>
          </div>


          {/* RIGHT SIDE IMAGES */}
          <div className="grid grid-cols-2">
            
            <div className="h-[520px] wifth-full overflow-hidden">
              <img
                    src="/src/assets/images/whoweare(1).jpeg"
                alt="Factory"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-[520px] overflow-hidden mt-8">
              <img
                src="/src/assets/images/whoweare(2).jpeg"
                alt="Engine"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
