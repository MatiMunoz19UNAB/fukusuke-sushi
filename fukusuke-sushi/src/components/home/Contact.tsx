// src/components/home/Contact.tsx
// Sección de información de contacto

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-800">
          Contáctanos
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Dirección */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
              <MapPin className="text-red-600" size={28} />
            </div>
            <h3 className="font-semibold mb-2 text-slate-800">Dirección</h3>
            <p className="text-slate-600">Maipú, Santiago, Chile</p>
          </div>

          {/* Teléfono */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
              <Phone className="text-red-600" size={28} />
            </div>
            <h3 className="font-semibold mb-2 text-slate-800">Teléfono</h3>
            <p className="text-slate-600">+56 9 1234 5678</p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
              <Mail className="text-red-600" size={28} />
            </div>
            <h3 className="font-semibold mb-2 text-slate-800">Email</h3>
            <p className="text-slate-600">contacto@fukusuke.cl</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;