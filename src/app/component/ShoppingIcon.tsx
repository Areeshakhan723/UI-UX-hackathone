import { ShoppingCart } from "lucide-react";
import { useQuantity } from "../context/QuantityContext";

const ShoppingIcon = () => {
  const { quantity } = useQuantity(); // Get quantity from context
  return (
    //  shopping icon
    <div className="flex relative items-start justify-start">
      <ShoppingCart className="text-gray-700" />
      <div className="absolute top-0 right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex justify-center items-center">
        {quantity}
      </div>
    </div>
  );
};

export default ShoppingIcon;
