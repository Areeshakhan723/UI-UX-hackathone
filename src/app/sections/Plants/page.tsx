"use client";
import Topbar from "@/app/component/Navbar";
import { img17 } from "@/app/constant/images";
import Image from "next/image";
import React from "react";
import AppSidebar from "../../component/AppSidebar";
import { productlists } from "../../constant/index";
import Link from "next/link";
const page = () => {
  return (
    <>
      <Topbar />
      <div className="max-container">
        <div className="relative w-full">
          <Image
            src={img17}
            alt="banner"
            width={800}
            height={60}
            className="w-full max-sm:h-[100px]"
          />
          {/* Text overlay  */}
          <div className="absolute px-14 py-10 max-lg:px-4 max-lg:py-4 inset-0 flex items-end justify-start">
            <p className="text-[18px] lg:text-[32px] text-white text-center">
              All Products
            </p>
          </div>
        </div>
        <div className="flex max-lg:flex-col py-3">
          <div className="flex max-lg:justify-center max-lg:items-center">
            <AppSidebar />
          </div>

          <div className="max-container flex justify-center px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-4">
              {productlists.map((items, index) => (
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
                      className="max-lg:w-[270px] max-lg:h-[300px]  translate transition duration-300 ease-in-out hover:scale-105"
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
        </div>
      </div>
    </>
  );
};

export default page;
