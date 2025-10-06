// src/components/layout/Footer.tsx
// Componente de pie de página con información de contacto y redes sociales

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400 text-sm">
              © 2025 Fukusuke Sushi Delivery. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-slate-400 hover:text-white transition"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-white transition"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-white transition"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;