"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { ProductTypes } from "../../../types/products";
import { category } from "@/sanity/lib/qureries";
import { urlFor } from "@/sanity/lib/image";

const Ceramics = () => {
  const [product, setProducts] = useState<ProductTypes[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData: ProductTypes[] = await client.fetch(category);
        setProducts(fetchedData);
        setError(null); // Clear error if the fetch is successful
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load products. Please try again later.");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="max-acontainer padding-x flex justify-center">
      {error ? (
        <div className="text-red-500 text-center mt-6">{error}</div>
      ) : (
        <>
          {/* Carousel for small screens */}
          <div className="lg:hidden">
            <Carousel>
              <CarouselContent className="pt-9">
                {product.map((items) => (
                  <CarouselItem
                    key={items._id}
                    className="flex justify-center items-center"
                  >
                    <Link
                      href={`/sections/${items.name
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                    >
                      <Image
                        src={urlFor(items.image).url()}
                        alt={items.name}
                        height={375}
                        width={305}
                        className="w-auto h-auto max-lg:w-[270px] max-lg:h-[300px] translate transition duration-300 ease-in-out hover:scale-105"
                      />
                      <div className="mt-3">
                        <h2 className="text-DarkPrimary text-lg leading-normal">
                          {items.name}
                        </h2>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Grid for large screens */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-4">
            {product.map((items) => (
              <div key={items._id}>
                <Link
                  href={`/sections/${items.name
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                >
                  {items.image ? (
                    <Image
                      src={urlFor(items.image).url()}
                      alt={items.name}
                      height={375}
                      width={375}
                      priority
                      className="h-[300px] w-[300px] max-lg:w-[270px] max-lg:h-[300px] translate transition duration-300 ease-in-out hover:scale-105"
                    />
                  ) : (
                    <div>Image not available</div>
                  )}

                  <div className="mt-3">
                    <h2 className="text-DarkPrimary text-lg leading-normal">
                      {items.name}
                    </h2>

                    <p className="text-DarkPrimary text-lg leading-normal">
                      {items.price}$
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Ceramics;
