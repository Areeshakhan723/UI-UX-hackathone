// QuantityContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context
interface QuantityType {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

// Create the context
const QuantityContext = createContext<QuantityType | undefined>(undefined);

// Create a provider to wrap the app
export const QuantityProvider = ({ children }: { children: ReactNode }) => {

  const [quantity, setQuantity] = useState<number>(0);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev -1 : prev));
  
  return (
    <QuantityContext.Provider value={{ quantity, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </QuantityContext.Provider>
  );
};

// Create a custom hook to make using the context easier
export const useQuantity = (): QuantityType => {
  const context = useContext(QuantityContext);
  if (!context) {
    throw new Error("useQuantity must be used within a QuantityProvider");
  }
  return context;
};
