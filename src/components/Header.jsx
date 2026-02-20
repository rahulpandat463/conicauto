import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import conicLogo from "../assets/images/Conic Logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // ✅ Scroll lock when drawer open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Yellow Strip */}
      <div className="w-full h-3 bg-yellow-500"></div>

      <nav>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">

            {/* Left - Menu Button */}
            <button 
              onClick={() => setIsOpen(true)} 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu size={32} className="text-gray-700" />
            </button>

            {/* Center - Logo */}
            <img src={conicLogo} alt="CONIC AUTOMOTIVE" className="h-14 w-auto" />

            {/* Right */}
            <button className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg border-2 border-yellow-500 hover:bg-blue-800 transition text-sm font-medium">
              <Phone size={16} />
              Call Us
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay - Dark background when menu is open */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-md transition-all duration-500 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer - Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[340px] bg-gradient-to-b from-white to-gray-50 shadow-[4px_0_30px_rgba(0,0,0,0.3)]
        transform transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between">
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors">
              <X size={28} className="text-gray-700" />
            </button>

            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold text-blue-900">CONIC</h2>
              <span className="text-xs text-yellow-600 font-semibold">
                AUTOMOTIVE
              </span>
            </div>

            <div className="w-10"></div>
          </div>
        </div>

        {/* Menu */}
        <div className="px-6 py-6 space-y-2 overflow-y-auto h-full">

          <Link to="/" onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-yellow-400 hover:text-white rounded-lg transition">
            Home
          </Link>

          {/* Corporate */}
          <div>
            <button
              onClick={() => {
                toggleDropdown("corporate");
                navigate("/about");
              }}
              className={`flex items-center justify-between w-full px-4 py-3 text-lg font-medium rounded-lg transition ${
                openDropdown === "corporate"
                  ? "bg-yellow-400 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              Corporate
              <ChevronDown className={`transition ${openDropdown === "corporate" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "corporate" && (
              <div className="mt-2 ml-4 space-y-2 bg-gray-50 rounded-lg p-2">
                <Link to="/about" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-white rounded">
                  About Us
                </Link>
                <Link to="/history" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-white rounded">
                  History
                </Link>
                <Link to="/mission" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-white rounded">
                  Mission and Vision
                </Link>
              </div>
            )}
          </div>

          <Link to="/products" onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-yellow-400 hover:text-white rounded-lg transition">
            Products
          </Link>

          {/* Manufacturing */}
          <div>
            <button
              onClick={() => {
                toggleDropdown("manufacturing");
                navigate("/manufacturing");
              }}
              className={`flex items-center justify-between w-full px-4 py-3 text-lg font-medium rounded-lg transition ${
                openDropdown === "manufacturing"
                  ? "bg-yellow-400 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              Manufacturing
              <ChevronDown className={`transition ${openDropdown === "manufacturing" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "manufacturing" && (
              <div className="mt-2 ml-4 space-y-2 bg-gray-50 rounded-lg p-2">
                <Link to="/production" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-white rounded">
                  Production
                </Link>
                <Link to="/rnd" onClick={() => setIsOpen(false)} className="block px-4 py-2 hover:bg-white rounded">
                  R&D
                </Link>
              </div>
            )}
          </div>

          <Link to="/blog" onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-yellow-400 hover:text-white rounded-lg transition">
            Blog and Events
          </Link>

          <Link to="/contact" onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-yellow-400 hover:text-white rounded-lg transition">
            Contact
          </Link>

          {/* Bottom Contact */}
          <div className="mt-8 border-t pt-6 px-4">
            <h3 className="font-semibold mb-3">Get in touch</h3>
            <p className="text-gray-600">+91 9811608030</p>
            <p className="text-black-400 font-medium">info@conicautomotive.com</p>
            <p className="text-black-400 font-medium">devinder@conicauto.com</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;
