// src/types/index.ts
// Definiciones de tipos para el proyecto Fukusuke Sushi Delivery

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface UserData {
  name: string;
  email: string;
  phone: string;
  address: string;
  commune: string;
  region: string;
}

export type Category = 'all' | 'rolls' | 'nigiri' | 'sashimi' | 'entradas' | 'combos';