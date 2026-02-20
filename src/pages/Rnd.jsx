import React, { useEffect, useRef } from 'react';
import { Factory, FlaskConical, Microscope, ClipboardCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import rndVideo from '../assets/videos/Other video 4.mp4';

gsap.registerPlugin(ScrollTrigger);

const Rnd = () => {
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
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
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
    <>
      {/* Hero Section */}
      <div
        className="relative h-[520px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="relative max-w-7xl mx-auto px-16 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-[16px] md:text-[42px] text-yellow-500 mb-5 leading-tight font-black">
              Research and Development
            </h1>
            <p className="text-gray-200 text-[17px] leading-[1.8]">
              Research and Development (R&D) in gasket manufacturing involves
              the systematic investigation, innovation, and refinement of
              materials, processes, and designs to enhance the performance,
              durability, and efficiency of gaskets.
            </p>
          </div>
        </div>
      </div>

      {/* Lab and Precision Engineering Centre */}
      {/* New Part Development Section */}
      <div className="bg-[#f3f3f3] py-20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-start gap-16">

          {/* Left Image */}
          <div className="lg:w-1/2">
            <img
              src="/src/assets/images/home-2.jpg"   // 👈 apni image path yaha daalo
              alt="New Part Development"
              className="w-full h-[780px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2">

            <h2 className="text-4xl font-bold text-black mb-6 leading-snug">
              New Part <br /> Development (NPD)
            </h2>

            <p className="text-gray-600 text-[15px] leading-7 mb-6">
              Developing new gasket parts involves a systematic process of research,
              design, testing, and manufacturing to meet specific requirements and
              industry standards.
            </p>

            <div className="space-y-5 text-[15px] leading-7 text-gray-600">

              <p>
                <span className="font-semibold text-black">
                  Research and Analysis:
                </span>{" "}
                Identify the specific needs of clients and industries to understand
                the purpose and performance requirements of the new gasket part.
                Research existing solutions, materials, and technologies to gather
                insights for innovative design.
              </p>

              <p>
                <span className="font-semibold text-black">
                  Design and Engineering:
                </span>{" "}
                Work with design engineers to create detailed CAD drawings of the
                new gasket part, considering factors like dimensions, material
                compatibility, and sealing properties. Utilize advanced design
                software to optimize the geometry and material selection for maximum
                performance.
              </p>

              <p>
                <span className="font-semibold text-black">
                  Prototype Development:
                </span>{" "}
                Develop prototypes based on the CAD designs to test the
                functionality, fit, and performance of the new gasket part. Use rapid
                prototyping techniques to create physical models that can be
                evaluated and refined.
              </p>

              <p>
                <span className="font-semibold text-black">
                  Materials Selection:
                </span>{" "}
                Choose suitable materials based on factors such as temperature
                resistance, chemical compatibility, pressure requirements, and
                application-specific needs. Consider eco-friendly and sustainable
                materials if aligned with company values.
              </p>

              <p>
                <span className="font-semibold text-black">
                  Testing and Validation:
                </span>{" "}
                Conduct thorough testing of prototypes under real-world conditions to
                ensure they meet the intended performance standards. Perform leakage
                tests, compression tests, and other relevant assessments to validate
                the gasket's effectiveness.
              </p>

            </div>
          </div>

        </div>
      </div>


      {/* Lab and Precision Engineering Centre */}
      <section className="py-24 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-8">

              <h2 className="text-[38px] font-bold text-black leading-snug">
                Lab and Precision <br />
                Engineering Centre
              </h2>

              <p className="text-gray-600 text-[16px] leading-7">
                At Conic we adhere to Precision engineering in gasket manufacturing
                which involves high-level engineering principles, technologies, and
                techniques to produce gaskets with extremely accurate dimensions,
                tight tolerances, and exceptional quality.
              </p>

              <p className="text-gray-600 text-[16px] leading-7">
                Precision engineering aims to ensure that gaskets meet the specific
                requirements of different industries and applications, where even the
                smallest deviation can lead to performance issues or failures.
              </p>

              <p className="text-gray-600 text-[16px] leading-7">
                Precision engineering in gasket manufacturing is particularly valuable
                for industries such as aerospace and automotive, where reliability,
                efficiency, and performance are critical. It ensures that gaskets
                maintain consistent quality, provide reliable sealing, and contribute
                to the overall success of complex systems.
              </p>

            </div>

            {/* RIGHT IMAGE OR VIDEO */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">

              {/* If using VIDEO */}
              <video
                className="w-full h-[520px] object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={rndVideo} type="video/mp4" />
              </video>

            </div>

          </div>
        </div>
      </section>

      {/* Precision Engineering Integration */}
      {/* New Part Development Section */}
      <div className="bg-[#f3f3f3] py-20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-start gap-16">

          {/* Left Image */}
          <div className="lg:w-1/2">
            <img
              src="/src/assets/images/home-3.jpg"   // 👈 apni image path yaha daalo
              alt="New Part Development"
              className="w-full h-[780px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2">

            <h2 className="text-2xl font-bold text-black mb-6 leading-snug">
              Precision <br /> Engineering <br /> Integration
            </h2>
            <div className="space-y-5 text-[15px] leading-7 text-gray-600">

              <p>
                <span className="font-semibold text-black">
                  Advanced Materials Selection:
                </span>{""}
                Precision gasket manufacturing begins with the selection of appropriate materials that exhibit consistent properties and behavior. Engineers analyze the operational conditions, such as temperature, pressure, chemical exposure, and more, to choose materials that offer optimal performance and longevity.
              </p>

              <p>
                <span className="font-semibold text-black">
                 High-Precision Cutting Techniques:
                </span>{""}
                Laser cutting, waterjet cutting, and CNC machining are employed to achieve precise and intricate shapes for gaskets. These techniques ensure accuracy in dimensions and shapes, enabling gaskets to fit perfectly within their intended components.
              </p>

              <p>
                <span className="font-semibold text-black">
                  Computer-Aided Design (CAD) and Simulation
                </span>{""}
                CAD software is used to design gaskets with precision, allowing engineers to visualize and refine the design before manufacturing. Finite element analysis (FEA) and computational fluid dynamics (CFD) simulations can predict how gaskets will perform under different conditions, helping optimize their design.
              </p>
              <p>
                <span className="font-semibold text-black">
                  Automated Manufacturing Processes: 
                </span>{" "}
                Automation reduces human errors and ensures consistent quality. Automated cutting, shaping, and assembly processes contribute to precision by minimizing variations introduced by manual labor.
              </p>

              <p>
                <span className="font-semibold text-black">
                  Quality Control and Inspection: 
                </span>{" "}
                Rigorous quality control measures are implemented throughout the manufacturing process. Advanced inspection tools such as coordinate measuring machines (CMMs) and optical measurement systems are used to verify the accuracy of dimensions and tolerances.
              </p>

            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default Rnd;
