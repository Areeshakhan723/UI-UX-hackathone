"use client";

import { useCart } from "../context/CardContext";

const AddtoCard = ({product}: {product: { img: string; name: string; price: number }}) => {
  
  const { addToCart } = useCart();

  const handleCardItems = () => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div className="text-center">
      <button
        className="bg-DarkPrimary text-center text-sm font-medium text-LightGrey px-5 py-4 hover:bg-Primary"
        onClick={handleCardItems}
      >
        Add To Card
      </button>
    </div>
  );
};

export default AddtoCard;
