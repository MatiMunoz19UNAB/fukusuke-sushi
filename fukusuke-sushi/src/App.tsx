// src/App.tsx
// Componente principal de la aplicación Fukusuke Sushi Delivery

import React, { useState } from 'react';
import type { Product, CartItem, UserData, Category } from './types';
import './App.css';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Home sections
import Banner from './components/home/Banner';
import Features from './components/home/Features';
import Menu from './components/home/Menu';
import AboutUs from './components/home/AboutUs';
import Contact from './components/home/Contact';

// Cart & Auth
import CartSidebar from './components/cart/CartSidebar';
import Login from './components/auth/Login';

// Datos iniciales de productos (simulando backend)
const initialProducts: Product[] = [
  {
    id: 1,
    name: "Roll California",
    description: "Kanikama, palta, pepino y sésamo",
    price: 4500,
    category: "rolls",
    image: "🍱",
    available: true,
    rating: 4.8
  },
  {
    id: 2,
    name: "Roll Philadelphia",
    description: "Salmón, queso crema y cebollín",
    price: 5500,
    category: "rolls",
    image: "🍣",
    available: true,
    rating: 4.9
  },
  {
    id: 3,
    name: "Nigiri Salmón",
    description: "Arroz prensado con lámina de salmón fresco",
    price: 3200,
    category: "nigiri",
    image: "🍣",
    available: true,
    rating: 4.7
  },
  {
    id: 4,
    name: "Sashimi Atún",
    description: "Láminas de atún fresco (8 piezas)",
    price: 7800,
    category: "sashimi",
    image: "🐟",
    available: true,
    rating: 4.9
  },
  {
    id: 5,
    name: "Roll Tempura",
    description: "Camarón tempura, palta y salsa teriyaki",
    price: 6200,
    category: "rolls",
    image: "🍤",
    available: true,
    rating: 4.6
  },
  {
    id: 6,
    name: "Gyoza",
    description: "Empanaditas japonesas rellenas (6 unidades)",
    price: 3800,
    category: "entradas",
    image: "🥟",
    available: true,
    rating: 4.5
  },
  {
    id: 7,
    name: "Roll Spicy Tuna",
    description: "Atún picante, pepino y salsa sriracha",
    price: 5800,
    category: "rolls",
    image: "🌶️",
    available: true,
    rating: 4.7
  },
  {
    id: 8,
    name: "Combo Fukusuke",
    description: "20 piezas variadas + bebida incluida",
    price: 12500,
    category: "combos",
    image: "🍱",
    available: true,
    rating: 5.0
  },
  {
    id: 9,
    name: "Roll Ebi Acevichado",
    description: "Camarón, palta y salsa acevichada",
    price: 5200,
    category: "rolls",
    image: "🦐",
    available: true,
    rating: 4.8
  },
  {
    id: 10,
    name: "Nigiri Atún",
    description: "Arroz prensado con atún de calidad premium",
    price: 3500,
    category: "nigiri",
    image: "🍣",
    available: true,
    rating: 4.6
  },
  {
    id: 11,
    name: "Sashimi Salmón",
    description: "Láminas de salmón fresco (8 piezas)",
    price: 7200,
    category: "sashimi",
    image: "🐟",
    available: true,
    rating: 4.8
  },
  {
    id: 12,
    name: "Edamame",
    description: "Porotos de soja al vapor con sal de mar",
    price: 2800,
    category: "entradas",
    image: "🫘",
    available: true,
    rating: 4.4
  }
];

const App: React.FC = () => {
  // Estados principales
  const [products] = useState<Product[]>(initialProducts);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  // Funciones del carrito
  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, change: number) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  // Funciones de autenticación
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Simulación de login (en producción esto iría a un backend)
    setUserData({
      name: "Usuario Demo",
      email: formData.get('email') as string,
      phone: "+56 9 1234 5678",
      address: "Avenida Principal 123",
      commune: "Maipú",
      region: "Región Metropolitana"
    });
    
    setIsLoggedIn(true);
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    setIsLoginOpen(false);
  };

  // Función de checkout
  const handleCheckout = () => {
    if (!isLoggedIn) {
      setIsLoginOpen(true);
      setIsCartOpen(false);
      return;
    }
    
    // Aquí iría la lógica de procesamiento de pedido
    alert('¡Pedido realizado con éxito! Recibirás un correo de confirmación.');
    setCart([]);
    setIsCartOpen(false);
  };

  // Calcular total de items en el carrito
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsLoginOpen={setIsLoginOpen}
        setIsCartOpen={setIsCartOpen}
        cartItemsCount={cartItemsCount}
        isLoggedIn={isLoggedIn}
        userName={userData?.name}
      />

      {/* Main Content */}
      <main>
        <Banner />
        <Features />
        <Menu
          products={products}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onAddToCart={addToCart}
        />
        <AboutUs />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Sidebars */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
        isLoggedIn={isLoggedIn}
      />

      <Login
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        isLoggedIn={isLoggedIn}
        userData={userData}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default App;