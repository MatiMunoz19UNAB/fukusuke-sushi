// src/components/home/Features.tsx
// Sección de características destacadas del servicio

import React from 'react';
import { Clock, Star, MapPin } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
              <Clock className="text-red-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800">
              Entrega Rápida
            </h3>
            <p className="text-slate-600">
              Delivery en 30-45 minutos
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
              <Star className="text-red-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800">
              Calidad Premium
            </h3>
            <p className="text-slate-600">
              Ingredientes frescos y auténticos
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
              <MapPin className="text-red-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-800">
              Delivery Gratis
            </h3>
            <p className="text-slate-600">
              En un radio de 3 km desde Maipú
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;