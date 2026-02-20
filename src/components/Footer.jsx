import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import certificateImg from "../assets/images/certificate.jpeg";

const Footer = () => {
  return (
    <>
      {/* CERTIFICATE + CONTENT SECTION */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT - Certificate Image */}
          <div className="flex justify-center md:justify-end">
            <div className="border border-gray-200  max-h-[600px] p-2  bg-white max-w-[400px]">
              <img
                src={certificateImg}
                alt="ISO Certification"
                className="w-full h-auto"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/350x450?text=ISO+Certificate";
                }}
              />
            </div>
          </div>

          {/* RIGHT - Content */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">
              Conic Means Growth
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              Our clients are at the heart of everything we do. We are committed
              to forging deep, lasting partnerships by understanding and
              anticipating our clients' unique needs. Our promise is to
              consistently deliver gasket solutions that exceed expectations in
              performance, quality, and reliability.
            </p>

            <p className="text-gray-600 mb-10 leading-relaxed text-sm">
              We prioritize open communication, responsiveness, and
              customization, ensuring that each client receives tailored
              support and innovative solutions that empower their success.
              Our commitment extends beyond products to fostering collaboration
              and providing expert guidance, standing by our clients at every
              stage of their journey.
            </p>

            <h3 className="text-2xl font-bold text-blue-900">
              “CONIC” where engine can trust
            </h3>
          </div>

        </div>
      </div>

      {/* YELLOW CONTACT SECTION */}
      <div className="bg-yellow-500 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">

          {/* Phone */}
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-yellow-400/30 rounded-full">
              <Phone size={32} className="text-black" />
            </div>
            <p className="text-black font-semibold text-lg hover:text-blue-900 transition-colors cursor-pointer">
              +91 9811608030
            </p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-yellow-400/30 rounded-full">
              <MapPin size={32} className="text-black" />
            </div>
            <div className="text-black font-medium leading-relaxed max-w-xs">
              <p>Khasra No.1163/3, Biswa-8, Khandsa,</p>
              <p>Opp. GKN International, Begampur Khatola,</p>
              <p>Near Green Land School, Sector-34, Block A,</p>
              <p>Gurugram, Haryana 122002</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-yellow-400/30 rounded-full">
              <Mail size={32} className="text-black" />
            </div>
            <div className="text-black font-semibold text-lg flex flex-col items-center">
              <a href="mailto:info@conicautomotive.com" className="hover:text-blue-900 transition-colors">info@conicautomotive.com</a>
              <a href="mailto:devinder@conicauto.com" className="hover:text-blue-900 transition-colors">devinder@conicauto.com</a>
            </div>
          </div>

        </div>
      </div>

      {/* DARK BLUE BOTTOM STRIP */}
      <div className="bg-blue-900 py-6 border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-blue-100 font-medium">

          <div className="flex gap-12 mb-4 md:mb-0">
            <p className="cursor-pointer hover:text-white transition-colors">
              Privacy Policy
            </p>
            <p className="cursor-pointer hover:text-white transition-colors">
              Contact Us
            </p>
          </div>

          <p className="opacity-80">
            Built by <a href="https://www.survin.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">www.survin.com</a>
          </p>

        </div>
      </div>
    </>
  );
};

export default Footer;
