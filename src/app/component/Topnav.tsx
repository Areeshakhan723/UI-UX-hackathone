"use client";
import { CircleUser,  Truck } from "lucide-react";
import Link from "next/link";
import ShoppingIcon from "./ShoppingIcon";
import SearchComponent from "@/app/component/SearchComponent";

const Topnav = () => {

  return (
    <>
      <div className="bg-DarkPrimary py-3 h-auto">
        <div className="flex justify-center items-center gap-2 max-lg:px-3">
          <Truck className="text-white" />
          <h1 className="text-white text-[16px]">
            Free delivery on all orders over £50 with code easter checkout
          </h1>
        </div>
      </div>

      {/* navbar links */}
      <div className="max-container p-3 px-[40px] flex justify-between items-center border-b-2 border-BorderGrey max-lg:hidden">
        <h1 className="text-black text-[24px]">Avion</h1>
        <header className="max-lg:hidden">
          <ul className="text-[#726E8D] flex justify-center items-center gap-6 md:text-[16px] lg:text-[18px] max-lg:hidden">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/sections/About">About</Link>
            </li>
            <li>
              <Link href="/sections/Allproducts">All Products</Link>
            </li>
            <li>
              <Link href="/sections/Cart">Cart</Link>
            </li>
            <li>
              <Link href="/sections/Signup">SignUp</Link>
            </li>

          </ul>
        </header>
        <div className="flex justify-center items-center gap-3">
          
          {/* Add Search Component */}
          <SearchComponent />
          {/* shopping component */}
          <ShoppingIcon />

          <CircleUser />
        </div>
      </div>
    </>
  );
};

export default Topnav;
