"use client";

import { Bounce, toast } from "react-toastify";
import { useCart } from "../context/CardContext";

const AddtoCard = ({
  product,
}: {
  product: { img: string; name: string; price: number };
}) => {
  const { addToCart } = useCart();

  const handleCardItems = () => {
    // Add product to cart
    addToCart({ ...product, quantity: 1 });

    // Display toast notification
    toast("🛒 Added to Cart!", {
      position: "top-right",
      autoClose: 3000, // Adjust auto-close timing as needed
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
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
