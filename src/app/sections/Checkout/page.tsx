"use client"
import { useCart } from "@/app/context/CardContext";
import Checkout from "@/app/component/Checkout";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Topnav from "@/app/component/Topnav";
import MobileNav from "@/app/component/MobileNavbar";

const Page = () => {
  const { cartItems, getSubTotal } = useCart();

  return (
    <div className="bg-backgroundWhite">
      <Topnav />
          
          <MobileNav />
      <div className="flex flex-wrap gap-6 max-md:flex-col max-container">
        {/* Checkout Form */}
        <div className="flex-1 bg-white">
          <Checkout />
        </div>

        {/* Product Section */}
        <div className="flex-1">
          {cartItems.map((items, index) => (
            <div
              key={index}
              className="flex p-6 flex-col max-md:flex max-md:flex-col max-md:justify-between"
            >
              <div className="flex flex-col">
                <div>
                  <Image
                    // src={urlFor(items.image).url()}
                    src={items.image ? urlFor(items.image)?.url() : "/fallback-image.jpg"}
                    alt={items.name}
                    width={80}
                    height={100}
                    className="w-[100px] h-[100px] bg-white"
                  />
                </div>
                <div className="flex pt-2 justify-between gap-4 max-lg:w-auto max-md:flex-col">
                  <div>
                    <h1 className="text-lg font-semibold">{items.name}</h1>
                    <p className="text-base">{items.description}</p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <p className="text-lg text-end font-semibold">{items.price}$</p>
              </div>

              <div className="flex gap-3 items-center max-sm:flex-col">
                <input
                  type="text"
                  name="Discount code"
                  placeholder="Discount code"
                  className="lg:w-[350px] border-2 border-bordergrey rounded-md mt-2 outline-none py-3 px-4"
                />

                <button className="text-gray-600 text-bold text-lg bg-[rgb(226,223,223)] py-2 px-4 rounded-md mt-2">
                  Apply
                </button>
              </div>
            </div>
          ))}

          {/* Summary Section */}
          <div className="flex flex-col w-auto lg:w-[350px] p-4">
            <div className="flex justify-between mt-3">
              <p>Subtotal:</p>
              <p>Rs: {getSubTotal().toFixed(2)}$</p>
            </div>
            <div className="flex justify-between mt-3">
              <p>Shipping:</p>
              <p>Rs: 250.00$</p>
            </div>

            <div className="flex justify-between mt-3 gap-3">
              <h1 className="text-xl font-semibold text-DarkPrimary">Total</h1>
              <p className="text-lg font-bold">Rs: {getSubTotal() + 250}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
