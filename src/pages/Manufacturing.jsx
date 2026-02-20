import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import manufacturingVideo from '../assets/videos/Other-Video-2-Copy.mp4';
import manufacturingVideo2 from '../assets/videos/Other-video-3.mp4';

gsap.registerPlugin(ScrollTrigger);

const Manufacturing = () => {
  const containerRef = useRef(null);
  const productionRef = useRef(null);
  const rndRef = useRef(null);

  useEffect(() => {
    // Production Section - Right to Left
    if (productionRef.current) {
      gsap.fromTo(
        productionRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: productionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // R&D Section - Left to Right
    if (rndRef.current) {
      gsap.fromTo(
        rndRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rndRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1565034946487-077786996e27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-amber-500 mb-6 tracking-tight uppercase">
              Manufacturing
            </h1>
            <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
              Our current manufacturing unit is in Manesar, Haryana has spread over area of 22000 sq. ft. Manesar is 40 Kms away from New Delhi's Indira Gandhi Airport.
            </p>
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section ref={productionRef} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Media */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square lg:aspect-video bg-gray-100">
              <video
                src={manufacturingVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>

            {/* Right - Text */}
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold text-blue-900">
                Production
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                In our Manesar plant we manufacture Multi layer Gaskets, Edge Moulded Gaskets, Non- Asbestos Gaskets, PTFE Gaskets, Oil seals, Valvestem Seals, Rubber parts and Sheet Metal parts for Caterpillar, Cummins, Detroit, Waukesha, Komatsu, Navystar, JCB, Ford, Perkins, Messi Ferguson. Mack Trucks, Volvo trucks, Mercedes Trucks and other major diesel engines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Section */}
      <section ref={rndRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-4xl font-extrabold text-blue-900">
                Research and Development
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Research and Development (R&D) in gasket manufacturing involves the systematic investigation, innovation, and refinement of materials, processes, and designs to enhance the performance, durability, and efficiency of gaskets.
              </p>
            </div>

            {/* Right - Media */}
            <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl aspect-square lg:aspect-video bg-gray-100">
              <video
                src={manufacturingVideo2}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;
