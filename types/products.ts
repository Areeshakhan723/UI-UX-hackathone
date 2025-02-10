import { StaticImageData } from "next/image";

export interface ProductTypes {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: {
    asset: {
      _ref: string | StaticImageData;
      _type: "image";
    };
  };
  tags: string[];
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
  quantity: number;
  features: string[];
  slug: string;
}
