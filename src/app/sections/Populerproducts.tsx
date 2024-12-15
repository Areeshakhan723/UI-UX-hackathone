import Image from "next/image";
import { product } from "../constant/index";
import Link from "next/link";
const Populerproducts = () => {
  return (
    <div className="padding-x max-container">
      <h1 className="text-start text-black text-[30px] padding-t">
        Our popular products
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-4 py-6">
          {product.map((items, index) => (
            <div key={index}>
              <Link
                href={`/sections/${items.name
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                <Image
                  src={items.img}
                  alt="products"
                  height={375}
                  width={305}
                  priority
                  className="w-auto h-auto max-lg:w-[270px] max-lg:h-[300px] translate transition duration-300 ease-in-out hover:scale-105"
                />
                <div className="mt-3">
                  <h2 className="text-DarkPrimary text-lg leading-normal">
                    {items.name}
                  </h2>
                  <p className="text-DarkPrimary text-lg leading-normal">
                    {items.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center pb-4">
        <Link href={"/sections/Plants"}>
        <button className="text-DarkPrimary text-center text-sm font-medium bg-LightGrey px-4 py-3 translate transition duration-300 hover:scale-105 hover:bg-DarkPrimary hover:text-LightGrey">
          View Collection
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Populerproducts;
