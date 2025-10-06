// src/components/cart/CartSidebar.tsx
// Panel lateral del carrito de compras con resumen y checkout

import React from 'react';
import { X } from 'lucide-react';
import type { CartItem as CartItemType } from '../../types';
import CartItem from './CartItem';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItemType[];
  onUpdateQuantity: (productId: number, change: number) => void;
  onRemove: (productId: number) => void;
  onCheckout: () => void;
  isLoggedIn: boolean;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemove,
  onCheckout,
  isLoggedIn
}) => {
  // Calcular total del carrito
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Sidebar */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Tu Pedido</h2>
            <button 
              onClick={onClose} 
              className="text-slate-500 hover:text-slate-700 transition"
              aria-label="Cerrar carrito"
            >
              <X size={24} />
            </button>
          </div>

          {/* Carrito vacío */}
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-slate-500 text-lg">Tu carrito está vacío</p>
              <button
                onClick={onClose}
                className="mt-6 text-red-600 hover:text-red-700 font-medium"
              >
                Ver menú
              </button>
            </div>
          ) : (
            <>
              {/* Lista de items */}
              <div className="space-y-4 mb-6">
                {cart.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemove={onRemove}
                  />
                ))}
              </div>

              {/* Resumen de totales */}
              <div className="border-t border-slate-200 pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-semibold">
                    ${calculateTotal().toLocaleString('es-CL')}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-600">Delivery</span>
                  <span className="font-semibold text-green-600">Gratis</span>
                </div>
                <div className="flex justify-between items-center text-xl font-bold mt-4 pt-4 border-t border-slate-200">
                  <span>Total</span>
                  <span className="text-red-600">
                    ${calculateTotal().toLocaleString('es-CL')}
                  </span>
                </div>
              </div>

              {/* Botón de checkout */}
              <button
                onClick={onCheckout}
                className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition shadow-lg"
              >
                {isLoggedIn ? 'Realizar Pedido' : 'Ingresar y Realizar Pedido'}
              </button>

              {/* Nota sobre delivery */}
              <p className="text-xs text-slate-500 text-center mt-4">
                * Delivery gratis en un radio de 3 km desde Maipú
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;