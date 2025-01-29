"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductTypes } from "../../../types/products";
import { allproducts } from "@/sanity/lib/qureries";
import { urlFor } from "@/sanity/lib/image";

const Page = () => {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData: ProductTypes[] = await client.fetch(allproducts);
        setProducts(fetchedData);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Your Network issue. Please try refreshing the page.");
      }
    }
    fetchData();
  }, []);

  if (error) {
    // Fallback UI when an error occurs
    return (
      <div className="padding max-container mt-3 w-full min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-bold text-red-500">Oops!</h1>
          <p className="mt-2 text-gray-700">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }
  

  return (
    <>
      <div className="padding-x max-container">
        <div className="max-lg:justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-4 py-6">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <Link
                href={`/sections/${product.name
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                {/* Product Image */}
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  height={375}
                  width={375}
                  priority
                  className="h-[300px] w-[300px] max-lg:w-[270px] max-lg:h-[300px] translate transition duration-300 ease-in-out hover:scale-105"
                />

                {/* Product Details */}
                <div className="mt-3">
                  <h2 className="text-DarkPrimary text-lg leading-normal">
                    {product.name}
                  </h2>
                  <p className="text-DarkPrimary text-lg leading-normal">
                    {product.price}$
                  </p>
                </div>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-sm bg-gray-200 text-gray-700 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
