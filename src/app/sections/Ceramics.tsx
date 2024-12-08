import Image from "next/image";
import { populerproduct } from "../constant/index";

const Ceramics = () => {
  return (
    <div className="max-container padding-x">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-4">
        {populerproduct.map((items, index) => (
          <div key={index}>
            <Image src={items.img} alt="products" height={375} width={305} />

            <div className="mt-3">
              <h2 className="text-DarkPrimary text-lg leading-normal">{items.name}</h2>
              <p className="text-DarkPrimary text-lg leading-normal">{items.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ceramics;
