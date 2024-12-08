import Image, { StaticImageData } from "next/image";
import React from "react";

const FeaturesCard = ({
  imgicon,
  title,
  description,
}: {
  imgicon: string | StaticImageData;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-start items-start flex-col gap-3 border border-LightGrey p-2">
        <Image src={imgicon} alt="Features icon" height={30} width={30} />

        <div className="mt-2 w-[300px]">
          <h1 className="text-lg leading-normal">{title}</h1>
          <p className="text-sm leading-normal">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
