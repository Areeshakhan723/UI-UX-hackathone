"use client";

import { Bounce, toast } from "react-toastify";
import { useCart } from "../context/CardContext";
import { ProductTypes } from "../../../types/products";

const AddToCart = ({ product }: { product: ProductTypes }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const formattedProduct: ProductTypes = {
      ...product,
      quantity: 1, // Ensure quantity is set
    };

    addToCart(formattedProduct);

    toast("🛒 Added to Cart!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="text-center">
      <button
        className="bg-DarkPrimary text-sm font-medium text-LightGrey px-5 py-4 hover:bg-Primary"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
