// src/components/home/Menu.tsx
// Sección del menú con búsqueda, filtros y catálogo de productos

import React from 'react';
import { Search } from 'lucide-react';
import type { Product, Category } from '../../types';
import ProductCard from '../product/ProductCard';

interface MenuProps {
  products: Product[];
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onAddToCart: (product: Product) => void;
}

const categories: Category[] = ['all', 'rolls', 'nigiri', 'sashimi', 'entradas', 'combos'];

const categoryNames: Record<Category, string> = {
  all: 'Todos',
  rolls: 'Rolls',
  nigiri: 'Nigiri',
  sashimi: 'Sashimi',
  entradas: 'Entradas',
  combos: 'Combos'
};

const Menu: React.FC<MenuProps> = ({
  products,
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
  onAddToCart
}) => {
  // Filtrar productos por categoría y búsqueda
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch && product.available;
  });

  return (
    <section id="menu" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-800">
          Nuestro Menú
        </h2>

        {/* Barra de búsqueda */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" 
              size={20} 
            />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selectedCategory === category
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {categoryNames[category]}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Mensaje si no hay productos */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">
              No se encontraron productos
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;