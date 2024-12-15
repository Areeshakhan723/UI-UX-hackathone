"use client";

import { useQuantity } from "../context/QuantityContext";

const QuantityButton = () => {
  const { quantity, increaseQuantity, decreaseQuantity } = useQuantity();

  return (
    <div className="bg-LightGrey w-[130px] px-4 py-2 flex justify-between items-center text-lg">
      <button onClick={decreaseQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
};

export default QuantityButton;
