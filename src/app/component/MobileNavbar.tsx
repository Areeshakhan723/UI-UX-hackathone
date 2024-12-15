"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify, Search } from "lucide-react";
import Link from "next/link";
import ShoppingIcon from "./ShoppingIcon";

const MobileNav = () => {
  return (
    <div className="hidden max-lg:block">
      <Sheet>
        <SheetTrigger className="p-4 w-full flex justify-between items-center border-b-2 border-BorderGrey">
          <div>
            <h1 className="text-black text-[24px]">Avion</h1>
          </div>
          <div className="flex justify-center items-center gap-3">
            {/* shopping component */}
            <ShoppingIcon />

            <Search className="cursor-pointer" />
            <AlignJustify />
          </div>
        </SheetTrigger>
        <SheetContent>
          <nav className="flex justify-center items-center flex-col gap-7">
            <ul className="text-lg flex justify-center items-center flex-col gap-6 mt-20">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/sections/About">About</Link>
              </li>
              <li>
                <Link href="/sections/Plants">All Products</Link>
              </li>
              <li>
                <Link href="/sections/Cart">Cart</Link>
              </li>
              <li>
                <Link href="/sections/Signup">SignUp</Link>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
