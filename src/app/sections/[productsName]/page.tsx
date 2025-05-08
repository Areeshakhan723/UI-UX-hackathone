import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import Topnav from "@/app/component/Topnav";
import MobileNav from "@/app/component/MobileNavbar";
import QuantityButton from "@/app/component/QuantityButton";
import AddtoCard from "@/app/component/AddtoCard";
import { notFound } from "next/navigation";
import { ProductTypes } from "../../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Ceramics from "../Ceramics";
import Features from "../Features";
import Subscribe from "../Subscribe";

const Page = async ({
  params,
}: {
  params: Promise<{ productsName: string }>;
}) => {
  const { productsName } = await params;

  // Fetch the product data
  const product: ProductTypes | null = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      price,
      description,
      "image": image.asset->url,
      tags,
      dimensions,
      features
    }`,
    { slug: productsName }
  );

  if (!product) {
    notFound();
  }

  return (
    <>
      <div className="w-full">
        <Topnav />
      </div>
      <MobileNav />
      <div className="max-container pt-14 padding-x">
        <div className="flex justify-start items-start gap-24 max-lg:flex-col">
          <div>
            <Image
              src={urlFor(product.image).url()}
              alt={`Product: ${product.name}`}
              width={400}
              height={300}
              className="w-auto h-auto max-w-[400px] max-h-[300px]"
              priority={true}
            />
          </div>
          <div className="flex justify-center flex-col">
            <h1 className="text-2xl text-black tracking-wide">
              {product.name}
            </h1>
            <p className="text-lg mt-2 text-black tracking-wide">
              ${product.price}
            </p>
            <div className="mt-8 w-full">
              <h4 className="text-lg text-gray-600">Description</h4>
              <p className="max-w-[500px] mt-5 text-gray-600">
                {product.description}
              </p>
              <div className="mt-5">
                <h4 className="text-lg text-gray-600">Features:</h4>
                <ul className="mt-5 text-gray-600 list-disc pl-5">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 flex gap-2 flex-wrap">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-sm bg-gray-200 text-gray-700 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-3">
              <p className="text-lg text-gray-600">Dimensions</p>
              <div className="flex justify-between w-[350px] mt-5 max-lg:w-[300px]">
                <div>
                  <p>Height</p>
                  <p className="text-gray-600 mt-1">
                    {product.dimensions.height}
                  </p>
                </div>
                <div>
                  <p>Width</p>
                  <p className="text-gray-600 mt-1">
                    {product.dimensions.width}
                  </p>
                </div>
                <div>
                  <p>Depth</p>
                  <p className="text-gray-600 mt-1">
                    {product.dimensions.depth}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-between items-center max-lg:flex-col">
              <div className="flex justify-between items-center gap-10 flex-row">
                <p className="text-lg">Quantity</p>
                <QuantityButton />
              </div>
              <div className="max-lg:m-6">
                <Link href="/sections/Cart">
                  <AddtoCard
                    product={
                      {
                        _id: product._id,
                        image: product.image,
                        name: product.name,
                        price: product.price,
                        description: product.description,
                        quantity: product.quantity,
                      } as ProductTypes
                    }
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

export default Page;
