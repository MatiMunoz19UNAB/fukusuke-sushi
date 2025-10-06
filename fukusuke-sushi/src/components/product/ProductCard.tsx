// src/components/product/ProductCard.tsx
// Tarjeta individual de producto con información y botón de agregar al carrito

import React from 'react';
import { Star } from 'lucide-react';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
      {/* Imagen del producto */}
      <div className="h-48 bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center text-6xl">
        {product.image}
      </div>
      
      {/* Contenido */}
      <div className="p-4">
        {/* Nombre y rating */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-lg text-slate-800 line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
        </div>
        
        {/* Descripción */}
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {/* Precio y botón */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-red-600">
            ${product.price.toLocaleString('es-CL')}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            disabled={!product.available}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              product.available
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-slate-300 text-slate-500 cursor-not-allowed'
            }`}
          >
            {product.available ? 'Agregar' : 'No disponible'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;