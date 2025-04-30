// "use client";
// import { createContext, useContext, useState, ReactNode } from "react";

// type Product = {
//   id: number;
//   name: string;
//   price: string;
//   image: string;
//   badge: string;
//   badgeColor: string;
//   description: string;
//   rating: number;
// };

// type CartContextType = {
//   cart: Product[];
//   addToCart: (product: Product) => void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   const addToCart = (product: Product) => {
//     setCart((prev) => [...prev, product]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) throw new Error("useCart must be used inside CartProvider");
//   return context;
// };

// --------------------

"use client";
import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  badge: string;
  badgeColor: string;
  description: string;
  rating: number;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    console.log("Adding to cart:", product); // Debug log
    setCart((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
