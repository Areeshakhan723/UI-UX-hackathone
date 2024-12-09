"use client";
import { useParams } from "next/navigation";
import { allProducts } from "../../constant/index";
import Image from "next/image";

const ProductDetail = () => {
  const { productsName } = useParams();

  const products = allProducts.find(
    (items) => items.name.toLowerCase().replace(/ /g, "-") === productsName
  );

  if (!products) {
    return <div>Product not found</div>; // Handle cases where the product doesn't exist
  }

  return (
    <div className="max-container pt-14 padding-x">
      <div className="flex justify-start items-start gap-24 max-lg:flex-col">
        <div>
          <Image
            src={products.img}
            alt={`product${products.name}`}
            width={400}
            height={300}
          />
        </div>
        <div className="flex justify-center flex-col">
          <h1 className="text-2xl text-black tracking-wide">{products.name}</h1>
          <p className="text-lg mt-2 text-black tracking-wide">
            {products.price}
          </p>
          <div className="mt-8 w-full">
            <h4 className="text-lg text-gray-600">Description</h4>
            <p className="max-w-[500px] mt-5 text-gray-600">
              A timeless design, with premium materials features as one of our
              most popular and iconic pieces. The dandy chair is perfect for any
              stylish living space with beech legs and lambskin leather
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
            <div className="flex justify-between w-[400px] mt-5">
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
