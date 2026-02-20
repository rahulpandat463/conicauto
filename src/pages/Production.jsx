import React, { useEffect, useRef } from 'react';
import { Factory, CheckCircle, Clock, Truck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import video1 from '../assets/videos/Other video 3.mp4';
import video3 from '../assets/videos/Other Video 2 - Copy.mp4';
import video4 from '../assets/videos/Other video 4.mp4';
import productionImage from "../assets/images/vision.jpg";

gsap.registerPlugin(ScrollTrigger);

const Production = () => {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      {/* Hero Section */}
<div className="relative h-[520px] overflow-hidden">

  {/* Background Image */}
  <img
    src={productionImage}   // <-- import your image properly
    alt="Production & Testing"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-16 h-full flex items-center">

    <div className="max-w-2xl">

      <h1 className="text-[38px] md:text-[44px] font-bold text-yellow-500 uppercase mb-5 leading-tight">
        PRODUCTION & TESTING FACILITIES
      </h1>

      <p className="text-white text-[17px] leading-[1.8]">
        Our current manufacturing unit is in Manesar, Haryana has spread
        over area of 22000 sq. ft. Manesar is 40 Kms away from New Delhi's
        Indira Gandhi Airport.
      </p>

    </div>

  </div>
</div>

      {/* Gaskets Stamping Area */}
      <section ref={addToRefs} className="py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900">
              <video
                className="w-full h-full object-cover"
                autoPlay loop muted playsInline
              >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">
                Gaskets Stamping Area
              </h2>
              <div className="w-16 h-1 bg-yellow-500"></div>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Our gasket stamping area is a dedicated space within manufacturing facility where the process of stamping or cutting gaskets from raw materials takes place. This area is essential for producing precision gasket components used in various industries for sealing applications.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  { label: "Cutting Presses", text: "High-precision machines tailored for specialized dies." },
                  { label: "Die Cutting Tools", text: "Custom templates for accuracy and consistency." },
                  { label: "Raw Material Storage", text: "Organized storage for rubber, cork, metal, PTFE, etc." },
                  { label: "Material Inspection", text: "Rigorous quality checks before processing." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-yellow-500 shrink-0"></div>
                    <p className="text-gray-700 font-semibold"><span className="text-blue-900">{item.label}:</span> {item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rubber Gaskets Moulding Area */}
      <section ref={addToRefs} className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">
                Rubber Gaskets Moulding Area
              </h2>
              <div className="w-16 h-1 bg-yellow-500"></div>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                We have a dedicated space within our manufacturing facility where the process of molding rubber gaskets takes place. Rubber gaskets are used in various industries to provide a reliable seal between components, and the molding process is critical to ensure their accuracy and performance.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  { label: "Injection Molding Machines", text: "Inject molten rubber into molds for consistent quality." },
                  { label: "Compression Molding Presses", text: "Heat and pressure for complex shapes and varying types." },
                  { label: "Rubber Material Storage", text: "Optimized storage for compound preservation." },
                  { label: "Material Inspection", text: "Strict checks to meet quality standards." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-yellow-500 shrink-0"></div>
                    <p className="text-gray-700 font-semibold"><span className="text-blue-900">{item.label}:</span> {item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900">
              <video
                className="w-full h-full object-cover"
                autoPlay loop muted playsInline
              >
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Rubber Material Storage */}
      <section ref={addToRefs} className="py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900">
              <video
                className="w-full h-full object-cover"
                autoPlay loop muted playsInline
              >
                <source src={video4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">
                Rubber Material Storage
              </h2>
              <div className="w-16 h-1 bg-yellow-500"></div>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Rubber material storage is an essential component of our manufacturing facility that works with rubber materials. Proper storage is crucial to maintain quality, prevent contamination, and ensure they remain suitable for production.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  { label: "Controlled Environment", text: "Protection from UV, heat, and moisture fluctuations." },
                  { label: "Shelving and Racking", text: "Keeping materials off-floor to avoid distortion." },
                  { label: "Moisture Control", text: "Desiccants and control systems for low humidity." },
                  { label: "Temperature Control", text: "Strict adherence to recommended storage ranges." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-yellow-500 shrink-0"></div>
                    <p className="text-gray-700 font-semibold"><span className="text-blue-900">{item.label}:</span> {item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Production Gallery Section */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2">
          {/* Left Column: Large Video */}
          <div className="relative group overflow-hidden h-full">
              <video
                src={video1}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Right Column: 2x2 Grid */}
            <div className="grid grid-cols-2">
              {/* Item 1: Floor */}
              <div className="relative group overflow-hidden shadow-md aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt="Floor"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/40 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white italic">Floor</h3>
                  <p className="text-gray-200 text-sm">Add a short description</p>
                </div>
              </div>

              {/* Item 2: Machine */}
              <div className="relative group overflow-hidden shadow-md aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt="Machine"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/40 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white uppercase italic">Machine</h3>
                  <p className="text-gray-200 text-sm">Add a short description</p>
                </div>
              </div>

              {/* Item 3: floor (lowercase) */}
              <div className="relative group overflow-hidden shadow-md aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1565034946487-077786996e27?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt="Floor"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/40 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white italic">floor</h3>
                  <p className="text-gray-200 text-sm">Add a short description</p>
                </div>
              </div>

              {/* Item 4: Jumping */}
              <div className="relative group overflow-hidden shadow-md aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt="Jumping"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/40 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white italic">Jumping</h3>
                  <p className="text-gray-200 text-sm">Add a short description</p>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Production;
