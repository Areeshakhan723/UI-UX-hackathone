import { Search, CircleUser, ShoppingCart } from "lucide-react";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
const Topbar = () => {
  return (
    <>
      <nav className="max-container">
        <div className="p-2 flex justify-between items-center border-b-2 border-BorderGrey max-lg:hidden">
          <div>
            <Search className="cursor-pointer" />
          </div>
          <h1 className="text-black text-[24px]">Avion</h1>
          <div className="flex justify-center items-center gap-3">
            <ShoppingCart />
            <CircleUser />
          </div>
        </div>
        <header className="p-5 max-lg:hidden">
          <ul className="text-[#726E8D] flex justify-center items-center gap-6 md:text-[16px] lg:text-[18px] max-lg:hidden">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Sections/About">About</Link>
            </li>
            <li>
              <Link href="/Sections/Plantpots">Plant pots</Link>
            </li>
            <li>
              <Link href="/Sections/Ceramics">Ceramics</Link>
            </li>
            <li>
              <Link href="/Sections/All Products">All Products</Link>
            </li>
          </ul>
        </header>
      </nav>
      <MobileNavbar />
    </>
  );
};

export default Topbar;
