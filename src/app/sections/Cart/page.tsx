// Cart/page.tsx
"use client";
import Navbar from "../../component/Navbar";
import Image from "next/image";
import { useCart } from "@/app/context/CardContext";

const Page = () => {
  const { cartItems, getSubTotal, removeFromCart } = useCart();

  const handleRemove = (itemName: string) => {
    removeFromCart(itemName);
  };
 
  return (
    <>
      <Navbar />
      <div className="max-container padding bg-LightGrey w-full">
        <div className="bg-white p-4">
          <h1 className="text-start text-black text-[30px] text-sm[24px] font-semibold">
            Your Shopping Cart
          </h1>
          {cartItems.length === 0 ? (
            <p className="padding-t text-lg">Your cart empty.</p>
          ) : (
            <div>
              <div className="max-md:hidden max-lg:block">
                <div className="flex justify-between p-6">
                  <h1>Product</h1>
                  <h1>Quantity</h1>
                  <h1>Total</h1>
                </div>
              </div>

              {cartItems.map((items, index) => (
                <div
                  key={index}
                  className="flex justify-between p-6 max-md:flex max-md:flex-col max-md:justify-between "
                >
                  <div>
                    <div className="flex ">
                      <Image
                        src={items.img}
                        alt={items.name}
                        width={100}
                        height={100}
                        className="w-[100px] h-[100px]"
                      />
                      <div className="flex flex-col p-3">
                        <h1 className="text-lg">{items.name}</h1>
                        <p>{items.price}$</p>
                        <div className="hidden max-md:block mt-3">
                          <p>{items.quantity}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex lg:px-7 mr-52 ">
                    <div className="max-md:hidden max-lg:block">
                      <p className="bg-[rgb(226,223,223)] px-5 text-center ">
                        {items.quantity}
                      </p>
                    </div>
                    <div>
                      <Image
                        src="/assets/trash.svg"
                        alt="delete icon"
                        width={24}
                        height={24}
                        onClick={() => handleRemove(items.name)} // Delete the item when clicked
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                    
                  <div className="max-md:hidden max-lg:block">
                    <p className="text-center">{items.price}</p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[1px] bg-LightGrey" />

              {/* Subtotal and Checkout */}
              <div className="flex justify-end items-end pt-4 p-5 flex-col gap-3">
                <div className="flex gap-3">
                  <h1 className="text-xl font-semibold text-DarkPrimary">
                    Subtotal
                  </h1>
                  <p className="text-lg font-bold">
                    ${getSubTotal().toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-DarkPrimary text-sm text-right">
                    Taxes and shipping are calculated at checkout.
                  </p>
                </div>
                <div>
                  <button className="bg-DarkPrimary text-center text-sm font-medium text-LightGrey px-5 py-4">
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;

