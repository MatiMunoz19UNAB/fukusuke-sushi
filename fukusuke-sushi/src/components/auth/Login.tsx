// src/components/auth/Login.tsx
// Modal de inicio de sesión y registro de usuarios

import React from 'react';
import { X } from 'lucide-react';
import type { UserData } from '../../types';

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  userData: UserData | null;
  onLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  onLogout: () => void;
}

const Login: React.FC<LoginProps> = ({
  isOpen,
  onClose,
  isLoggedIn,
  userData,
  onLogin,
  onLogout
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative max-h-[90vh] overflow-y-auto">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition"
          aria-label="Cerrar modal"
        >
          <X size={24} />
        </button>

        {/* Título */}
        <h2 className="text-3xl font-bold text-slate-800 mb-2">
          {isLoggedIn ? 'Mi Cuenta' : 'Bienvenido'}
        </h2>
        <p className="text-slate-600 mb-6">
          {isLoggedIn ? 'Información de tu cuenta' : 'Ingresa para realizar tu pedido'}
        </p>

        {isLoggedIn ? (
          /* Vista de usuario logueado */
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm text-slate-600 mb-1">Nombre</p>
              <p className="font-semibold text-slate-800">{userData?.name}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm text-slate-600 mb-1">Email</p>
              <p className="font-semibold text-slate-800">{userData?.email}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm text-slate-600 mb-1">Teléfono</p>
              <p className="font-semibold text-slate-800">{userData?.phone}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm text-slate-600 mb-1">Dirección</p>
              <p className="font-semibold text-slate-800">{userData?.address}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm text-slate-600 mb-1">Comuna</p>
              <p className="font-semibold text-slate-800">{userData?.commune}</p>
            </div>
            
            <button
              onClick={onLogout}
              className="w-full bg-slate-200 text-slate-700 py-3 rounded-lg font-semibold hover:bg-slate-300 transition mt-4"
            >
              Cerrar Sesión
            </button>
          </div>
        ) : (
          /* Formulario de login */
          <form onSubmit={onLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Correo Electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="tu@email.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Contraseña */}
            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Contraseña *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                minLength={6}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Botón de login */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-lg"
            >
              Ingresar
            </button>

            {/* Link a registro */}
            <p className="text-center text-sm text-slate-600">
              ¿No tienes cuenta?{' '}
              <button
                type="button"
                className="text-red-600 hover:text-red-700 font-medium"
                onClick={() => alert('Funcionalidad de registro próximamente')}
              >
                Regístrate aquí
              </button>
            </p>

            {/* Nota */}
            <p className="text-xs text-slate-500 text-center mt-4">
              Al iniciar sesión, aceptas nuestros términos y condiciones
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;