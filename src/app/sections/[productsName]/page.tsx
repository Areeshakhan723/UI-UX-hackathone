// dynamic page
"use client";
import { useParams } from "next/navigation";
import { allProducts } from "../../constant/index";
import Image from "next/image";
import Subscribe from "../Subscribe";
import Features from "../Features";
import Topnav from "@/app/component/Topnav";
import MobileNav from "@/app/component/MobileNavbar";
import QuantityButton from "@/app/component/QuantityButton";
import Link from "next/link";
import AddtoCard from "@/app/component/AddtoCard";
import Ceramics from "../Ceramics";

const ProductDetail = () => {
  const { productsName } = useParams();

  const products = allProducts.find(
    (items) => items.name.toLowerCase().replace(/ /g, "-") === productsName
  );

  if (!products) {
    return <div>Product not found</div>; // Handle cases where the product doesn't exist
  }

  let productPrice: number = NaN;

  if (typeof products.price === "string") {
    productPrice = parseFloat(products.price.replace(/[^0-9.-]+/g, ""));
  } else if (typeof products.price === "number") {
    productPrice = products.price;
  }

  // If productPrice is still NaN, handle it appropriately
  if (isNaN(productPrice)) {
    return <div>Error: Invalid price format</div>;
  }

  return (
    <>
      <Topnav />
      <MobileNav />
      <div className="max-container pt-14 padding-x">
        <div className="flex justify-start items-start gap-24 max-lg:flex-col">
          <div>
            <Image
              src={products.img}
              alt={`product${products.name}`}
              width={400}
              height={300}
              className="w-auto h-auto"
            />
          </div>
          <div className="flex justify-center flex-col">
            <h1 className="text-2xl text-black tracking-wide">
              {products.name}
            </h1>
            <p className="text-lg mt-2 text-black tracking-wide">
              {products.price}
            </p>
            <div className="mt-8 w-full">
              <h4 className="text-lg text-gray-600">Description</h4>
              <p className="max-w-[500px] mt-5 text-gray-600">
                A timeless design, with premium materials features as one of our
                most popular and iconic pieces. The dandy chair is perfect for
                any stylish living space with beech legs and lambskin leather
                upholstery.
              </p>
              <div className="mt-5">
                <ul className="mt-5 text-gray-600 list-disc">
                  <li>Premium material</li>
                  <li>Handmade upholstery</li>
                  <li>Quality timeless classic</li>
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-lg text-gray-600">Dimensions</p>
              <div className="flex justify-between w-[350px] mt-5 max-lg:w-[300px]">
                <div>
                  <p>Height</p>
                  <p className="text-gray-600 mt-1">110cm</p>
                </div>
                <div>
                  <p>Width</p>
                  <p className="text-gray-600 mt-1">75cm</p>
                </div>
                <div>
                  <p>Depth</p>
                  <p className="text-gray-600 mt-1">50cm</p>
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="mt-10 flex justify-between items-center max-lg:flex-col">
              <div className="flex justify-between items-center gap-10 flex-row">
                <p className="text-lg">Amount</p>
                <QuantityButton />
              </div>
              {/* Add to cart button */}
              <div className="max-lg:m-6">
                <Link href="/sections/Cart">
                  <AddtoCard
                    product={{
                      img: products.img,
                      name: products.name,
                      price: productPrice,
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 ">
        <h1 className="text-black text-center text-[30px] max-sm:text-[24px]">
          You might also like
        </h1>
        <Ceramics />
      </div>

      <Features />
      <Subscribe />
    </>
  );
};

export default ProductDetail;
