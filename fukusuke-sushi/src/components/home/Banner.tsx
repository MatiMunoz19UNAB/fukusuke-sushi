// src/components/home/Banner.tsx
// Banner promocional o anuncio destacado

import React from 'react';
import { Percent, Clock, TruckIcon } from 'lucide-react';

const Banner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-red-600 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white text-sm sm:text-base">
          {/* Promoción 1 */}
          <div className="flex items-center space-x-2">
            <Percent size={20} className="flex-shrink-0" />
            <span className="font-medium">10% OFF en combos</span>
          </div>

          {/* Separador */}
          <div className="hidden sm:block h-6 w-px bg-white/30" />

          {/* Promoción 2 */}
          <div className="flex items-center space-x-2">
            <TruckIcon size={20} className="flex-shrink-0" />
            <span className="font-medium">Delivery gratis 3km</span>
          </div>

          {/* Separador */}
          <div className="hidden sm:block h-6 w-px bg-white/30" />

          {/* Promoción 3 */}
          <div className="flex items-center space-x-2">
            <Clock size={20} className="flex-shrink-0" />
            <span className="font-medium">Entrega 30-45 min</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;