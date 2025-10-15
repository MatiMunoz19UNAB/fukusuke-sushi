// src/components/home/Features.tsx
// Sección de características destacadas del servicio

import React, { useEffect, useRef, useState } from 'react';
import { Clock, Star, MapPin } from 'lucide-react';
import portada1 from '../../assets/portada1.png';
import portada2 from '../../assets/portada2.png';

const Features: React.FC = () => {
  const images = [portada1, portada2];
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [images.length]);

  return (
    <section className="py-12 bg-white">
      {/* Contenedor de características */}
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

      {/* Carrusel fuera del contenedor para usar todo el ancho */}
      <div className="mt-12 w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${images.length * 100}%`,
              transform: `translateX(-${index * (100 / images.length)}%)`,
            }}
            aria-live="polite"
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 flex items-center justify-center bg-white"
                style={{ width: `${100 / images.length}%`, height: '500px' }}
              >
                <img
                  src={src}
                  alt={`Portada ${i + 1}`}
                  className="max-h-full w-auto object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Flechas de navegación */}
          <button
            onClick={() => setIndex((index - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white transition"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={() => setIndex((index + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white transition"
            aria-label="Siguiente"
          >
            ›
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === index ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Ir a portada ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
