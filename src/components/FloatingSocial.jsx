import React from 'react';
import { MessageCircle, Instagram, Linkedin, Facebook } from 'lucide-react';

const FloatingSocial = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-row gap-2">
      {/* WhatsApp */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="text-white w-5 h-5" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
      >
        <Instagram className="text-white w-5 h-5" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-800 hover:scale-110 transition-all duration-300"
      >
        <Linkedin className="text-white w-5 h-5" />
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300"
      >
        <Facebook className="text-white w-5 h-5" />
      </a>
    </div>
  );
};

export default FloatingSocial;
