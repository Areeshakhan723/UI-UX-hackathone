"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductTypes } from "../../../types/products";
import { populerproducts } from "@/sanity/lib/qureries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const PopulerProducts = () => {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData: ProductTypes[] = await client.fetch(populerproducts);
        setProducts(fetchedData);
      } catch (err) {
        console.error(err)
        setError("Failed to load products. Please try again later.");
      }
    }
    fetchData();
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-lg font-medium text-red-600">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-DarkPrimary text-LightGrey px-6 py-3 rounded-lg hover:bg-LightGrey hover:text-DarkPrimary transition"
        >
          Refresh Page
        </button>
      </div>
    );
  }

  return (
    <div className="padding-x max-container">
      <h1 className="text-start text-black text-[30px] padding-t">
        Our Popular Products
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-4 py-6">
          {products.map((item) => (
            <div key={item._id}>
              <Link
                href={`/sections/${item.name
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.name}
                  height={375}
                  width={305}
                  priority
                  className="h-[300px] w-[300px] max-lg:w-[270px] max-lg:h-[300px] translate transition duration-300 ease-in-out hover:scale-105"
                />
                <div className="mt-3">
                  <h2 className="text-DarkPrimary text-lg leading-normal">
                    {item.name}
                  </h2>
                  <p className="text-DarkPrimary text-lg leading-normal">
                    {item.price}$
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

export default PopulerProducts;
