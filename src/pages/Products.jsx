import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const categoryRefs = useRef([]);

  useEffect(() => {
    categoryRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.2, // Stagger effect
          }
        );
      }
    });
  }, []);
  const categories = [
    {
      title: "Heavy Commercial Vehicles and Earthmoving Machines",
      image: "/src/assets/images/product-image.webp",
      description: "High engine capacity also known as HEAVY DUTY. Conic is strengthened by many horse power Diesel engines strategically catering by the truck, bus and moving vehicles group since many years by using the latest technology.\n\nOur products are highly preferred by many foreign and domestic OEM, OEB and wholesale companies.",
      brands: [
        {
          name: "Cummins",
          logo: "/src/assets/images/cummins.png",
          description: "Cummins specializes in diesel and alternative fuel engines and generators, and related components and technology.",
          link: "#"
        },
        {
          name: "Detroit Diesel",
          logo: "/src/assets/images/detroit diesel.webp",
          description: "Detroit Diesel Corporation is an American diesel engine manufacturer headquartered in Detroit, Michigan. It is a subsidiary of Daimler Truck North America.",
          link: "#"
        },
        {
          name: "Caterpillar",
          logo: "/src/assets/images/catterpilar.png",
          description: "Caterpillar is the world's leading manufacturer of construction and mining equipment, diesel and natural gas engines, industrial turbines.",
          link: "#"
        },
        {
          name: "Komatsu",
          logo: "/src/assets/images/komatsu.webp",
          description: "Komatsu is a global leading manufacturer of construction, mining and forestry equipment as well as forklift and industrial machinery.",
          link: "#"
        },
        {
          name: "Mack",
          logo: "/src/assets/images/mack.webp",
          description: "Mack Trucks, Inc., is an American truck manufacturing company and a former manufacturer of buses and trolley buses.",
          link: "#"
        },
        {
          name: "Waukesha",
          logo: "/src/assets/images/waukesha.webp",
          description: "Waukesha is a brand of large stationary reciprocating engines produced by INNIO Waukesha Gas Engines.",
          link: "#"
        },
        {
          name: "Superior",
          logo: "/src/assets/images/superior.webp",
          description: "Superior Truck and Equipment Products, Inc. is a truck service, repair, and sales company located in Lilburn, Georgia.",
          link: "#"
        },
        {
          name: "Mercedes",
          logo: "/src/assets/images/mercedes.webp",
          description: "As part of the Daimler Trucks division, Mercedes Benz Trucks has been a hallmark of premium quality for more than 100 years.",
          link: "#"
        },
        {
          name: "Volvo",
          logo: "/src/assets/images/volvo.webp",
          description: "Volvo Trucks is one of the largest truck companies in the world. We sell vehicles and services in more than 140 countries.",
          link: "#"
        }
      ]
    },
    {
      title: "Agricultural Vehicles (Tractor)",
      image: "/src/assets/images/product-image(2).webp",
      description: "CONIC is one of the major global providers for Tractor's OEM and OEB companies.\n\nWe produce parts as leading produce. parts are designed, individually and produced in different stages for all Tractor group components our products are being preferred by many foreign and domestic OEM, OEB and wholesale companies.",
      brands: [
        {
          name: "New Holland (Ford)",
          logo: "/src/assets/images/new holland cgriculture.webp",
          description: "Write a description for this list item and include information that will interest site visitors. For example, you may want to describe a team member's experience.",
          link: "#"
        },
        {
          name: "Perkins",
          logo: "/src/assets/images/perkins.webp",
          description: "Perkins Engines Company Limited, a subsidiary of Caterpillar inc. since 1998, is primarily a diesel engine manufacturer for several markets.",
          link: "#"
        },
        {
          name: "Fiat",
          logo: "/src/assets/fiat.webp",
          description: "Fiat Trattori S.p.A. was a Fiat group company founded in 1919, and was a constructor of agricultural equipment, tractors in particular.",
          link: "#"
        },
        {
          name: "John Deere",
          logo: "/src/assets/john deere.webp", 
          description: "John Deere is an American corporation that manufactures agricultural machinery, heavy equipment, forestry machinery, diesel engines.",
          link: "#"
        },
        {
            name: "Ursus",
            logo: "/src/assets/images/utrus.webp",
          description: "Ursus SA (often stylized URSUS SA) is a Polish agricultural machinery manufacturer, headquartered in Lublin, Poland.",
          link: "#"
        },
        {
          name: "Zetor",
          logo: "/src/assets/images/fetor.webp",
          description: "Zetor is a Czech agricultural machinery manufacturer. Zetor portfolio includes six model ranges with power outputs ranging from 40 to 160 hp.",
          link: "#"
        },
        {
            name: "Belarus",
            logo: "/src/assets/images/beelarus.webp",
          description: "Belarus is a series of four-wheeled tractors produced since 1950 at Minsk Tractor Works, MTZ in Minsk, Belarus.",
          link: "#"
        },
        {
          name: "International Harvester",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/International_Harvester_Logo.svg/1200px-International_Harvester_Logo.svg.png",
          description: "The International Harvester Company was an American manufacturer of agricultural and construction equipment, automobiles, commercial trucks.",
          link: "#"
        },
        {
          name: "Massey",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Massey_Ferguson_logo.svg/1200px-Massey_Ferguson_logo.svg.png",
          description: "Massey Ferguson Limited is an American agricultural machinery manufacturer. The company was established in 1953 through a merger.",
          link: "#"
        }
      ]
    }
  ];

  return (
    <div className="bg-white pb-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl text-black-500 font-bold mb-16 border-b-4 border-yellow-500 pb-4 inline-block">
          Our Products
        </h1>
        <div className="grid lg:grid-cols-2 gap-x-20 items-start">
          {categories.map((category, catIndex) => (
            <div
              key={catIndex}
              ref={(el) => (categoryRefs.current[catIndex] = el)}
              className="flex flex-col"
            >
              {/* Category Intro */}
              <div className="mb-12">
                <div className="overflow-hidden rounded-2xl shadow-lg aspect-[16/9] mb-8 group">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line mb-8 font-medium">
                  {category.description}
                </p>
              </div>

              {/* Brand List - Recreating the specific section */}
              <div className="space-y-0">
                {category.brands.map((brand, brandIndex) => (
                  <div key={brandIndex} className="flex gap-8 items-start py-10  group hover:bg-gray-50/50 transition-colors">
                    {/* Brand Logo */}
                    <div className="w-24 h-16 flex-shrink-0 flex items-center justify-center p-2  overflow-hidden group-hover:shadow-md transition-shadow">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/150?text=' + brand.name;
                        }}
                      />
                    </div>

                    {/* Brand Content */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-900 transition-colors">
                        {brand.name}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        {brand.description}
                      </p>
                      <a
                        href={brand.link}
                        className="text-gray-400 text-xs font-bold uppercase tracking-wider underline decoration-gray-300 underline-offset-4 hover:text-blue-600 hover:decoration-blue-600 transition-all flex items-center gap-2"
                      >
                        Item Link
                        <ExternalLink size={12} className="opacity-50" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
