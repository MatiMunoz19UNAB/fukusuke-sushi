// src/components/layout/Header.tsx
// Componente de encabezado con navegación y acciones principales

import React from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  setIsLoginOpen: (value: boolean) => void;
  setIsCartOpen: (value: boolean) => void;
  cartItemsCount: number;
  isLoggedIn: boolean;
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  setIsLoginOpen,
  setIsCartOpen,
  cartItemsCount,
  isLoggedIn,
  userName
}) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3" aria-label="Ir a inicio">
            <img
              src={logo}
              alt="Fukusuke logo"
              className="w-36 h-12 object-contain"
              draggable={false}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#menu" className="text-slate-700 hover:text-red-600 transition">
              Menú
            </a>
            <a href="#about" className="text-slate-700 hover:text-red-600 transition">
              Nosotros
            </a>
            <a href="#contact" className="text-slate-700 hover:text-red-600 transition">
              Contacto
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsLoginOpen(true)}
              className="hidden sm:flex items-center space-x-2 text-slate-700 hover:text-red-600 transition"
              aria-label="Abrir inicio de sesión"
            >
              <User size={20} />
              <span className="text-sm">
                {isLoggedIn ? userName?.split(' ')[0] : 'Ingresar'}
              </span>
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-slate-700 hover:text-red-600 transition"
              aria-label="Abrir carrito de compras"
            >
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {cartItemsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-700"
              aria-label="Abrir menú móvil"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#menu" 
                className="text-slate-700 hover:text-red-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Menú
              </a>
              <a 
                href="#about" 
                className="text-slate-700 hover:text-red-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
              <a 
                href="#contact" 
                className="text-slate-700 hover:text-red-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <button
                onClick={() => {
                  setIsLoginOpen(true);
                  setIsMenuOpen(false);
                }}
                className="text-left text-slate-700 hover:text-red-600 transition"
              >
                {isLoggedIn ? userName : 'Ingresar'}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;