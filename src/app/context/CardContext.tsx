"use client";
import { useContext, createContext, useState, ReactNode } from "react";
import { ProductTypes } from "../../../types/products";

type CartItem = ProductTypes;

type CartType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  getSubTotal: () => number;
  removeFromCart: (itemId: string) => void;
};

const CartContext = createContext<CartType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add product to cart
  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i._id === item._id);
      if (existingItem) {
        return prevItems.map((i) =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, item];
    });
  };

  // Subtotal calculation
  const getSubTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Remove product from cart
  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getSubTotal, removeFromCart }}>
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

export default CartProvider;
