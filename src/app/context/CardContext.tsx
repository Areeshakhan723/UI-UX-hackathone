"use client";
import { StaticImageData } from "next/image";
import { useContext, createContext, useState, ReactNode } from "react";

type CartItem = {
  img: string | StaticImageData;
  name: string;
  price: number | string;
  quantity: number;
};

type CartType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  getSubTotal: () => number;
  removeFromCart: (itemName: string) => void;
};

const CartContext = createContext<CartType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // addede product function
  const addToCart = (item: CartItem) => {
    console.log("Cart Items:", cartItems);

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);

      if (existingItem) {
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }

      return [...prevItems, item];
    });
  };

  // Sub total function
  const getSubTotal = () => {
    const total = cartItems.reduce((acc, item) => {
      // Extract the numeric part of the price string (e.g., "£250" becomes 250)
      const price =
        parseFloat(item.price.toString().replace(/[^\d.-]/g, "")) || 0;
      const quantity = parseInt(item.quantity.toString(), 10) || 1;

      return acc + price * quantity; // Calculate total
    }, 0);

    return isNaN(total) ? 0 : total;
  };

  // Remove Product
  const removeFromCart = (itemName: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== itemName)
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, getSubTotal, removeFromCart }}
    >
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
