// Topbar.tsx
"use client";
import {  CircleUser } from "lucide-react";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import ShoppingIcon from "./ShoppingIcon";
import SearchComponent from "@/app/component/SearchComponent";

const Topbar = () => {

  return (
    <>
      <nav className="max-container">
        <div className="p-2 flex justify-between items-center border-b-2 border-BorderGrey max-lg:hidden">
          <div>
          {/* Add Search Component */}
          <SearchComponent />
          </div>
          <h1 className="text-black text-[24px]">Avion</h1>
          <div className="flex justify-center items-center gap-3">
            {/* shopping component */}
            <ShoppingIcon />

            <CircleUser />
          </div>
        </div>
        <header className="p-5 max-lg:hidden">
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
      </nav>
      <MobileNavbar />
    </>
  );
};

export default Topbar;
