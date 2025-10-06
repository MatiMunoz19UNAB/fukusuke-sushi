// src/components/cart/CartItem.tsx
// Item individual dentro del carrito de compras

import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import type { CartItem as CartItemType } from '../../types';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: number, change: number) => void;
  onRemove: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center space-x-4 bg-slate-50 p-4 rounded-lg">
      {/* Imagen del producto */}
      <div className="text-3xl flex-shrink-0">
        {item.image}
      </div>
      
      {/* Información del producto */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-slate-800 truncate">
          {item.name}
        </h3>
        <p className="text-red-600 font-medium">
          ${item.price.toLocaleString('es-CL')}
        </p>
      </div>
      
      {/* Controles de cantidad */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onUpdateQuantity(item.id, -1)}
          className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 transition flex items-center justify-center"
          aria-label="Disminuir cantidad"
        >
          <Minus size={16} />
        </button>
        <span className="w-8 text-center font-semibold">
          {item.quantity}
        </span>
        <button
          onClick={() => onUpdateQuantity(item.id, 1)}
          className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 transition flex items-center justify-center"
          aria-label="Aumentar cantidad"
        >
          <Plus size={16} />
        </button>
      </div>
      
      {/* Botón eliminar */}
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700 p-1"
        aria-label="Eliminar del carrito"
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default CartItem;