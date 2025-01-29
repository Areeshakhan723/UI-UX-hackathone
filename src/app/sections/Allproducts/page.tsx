"use client";
import Topbar from "@/app/component/Navbar";
import { img17 } from "@/app/constant/images";
import Image from "next/image";
import React from "react";
import AppSidebar from "../../component/AppSidebar";

import Product from "../../Product/page";
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
          <div>
            <Product />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
