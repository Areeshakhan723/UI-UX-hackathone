import Image from "next/image";
import { populerproduct } from "../constant/index";
import Link from "next/link";

const Ceramics = () => {
  return (
    <div className="max-container padding-x flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-4">
        {populerproduct.map((items, index) => (
          <div key={index}>
            <Link
              href={`/sections/${items.name.toLowerCase().replace(/ /g, "-")}`}
            >
              <Image
                src={items.img}
                alt="products"
                height={375}
                width={305}
                className="max-lg:w-[270px] max-lg:h-[300px] "
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
  );
};

export default Ceramics;
