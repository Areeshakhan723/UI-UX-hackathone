import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { Search } from "lucide-react";

const MobileNav = () => {
  return (
    <div className="hidden max-lg:block ">
      <Sheet>
        <SheetTrigger className="p-4 w-full flex justify-between items-center border-b-2 border-BorderGrey">
          <div>
            <h1 className="text-black text-[24px]">Avion</h1>
          </div>
          <div className="flex justify-center items-center gap-3">
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
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
