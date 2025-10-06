// src/components/home/AboutUs.tsx
// Sección "Sobre Nosotros" con información del restaurant

import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-800">
              Sobre Nosotros
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Fukusuke es un restaurant dedicado a la preparación y venta de sushi 
              auténtico en Maipú. Con años de experiencia, nos enorgullecemos de 
              ofrecer productos de la más alta calidad, elaborados con ingredientes 
              frescos y técnicas tradicionales japonesas.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Ahora, llevamos nuestra pasión por el sushi directamente a tu hogar 
              con nuestro servicio de delivery gratuito. Disfruta de la mejor comida 
              japonesa sin salir de casa.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-bold text-red-600 mb-1">5+</p>
                <p className="text-slate-600">Años de experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-600 mb-1">100%</p>
                <p className="text-slate-600">Ingredientes frescos</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-8 h-96 flex items-center justify-center text-8xl">
            🍱
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;