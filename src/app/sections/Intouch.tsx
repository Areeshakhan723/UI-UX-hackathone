import Image from "next/image";
import { img7 } from "../constant/images";
const Intouch = () => {
  return (
    <div className="bg-white max-container  w-full flex justify-between items-center max-lg:flex-col max-lg:gap-6 max-lg:padding-y">
      <div className="max-md:h-auto padding-x">
        <h1 className="text-DarkPrimary text-[32px] max-lg:text-[28px] max-w-[570px] leading-10">
          From a studio in London to a global brand with over 400 outlets
        </h1>

        <div className="w-full mt-20 max-w-[570px]">
          <p className="text-black leading-normal text-lg">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="mt-4 text-black leading-normal text-lg">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>
        </div>
        <div className="mt-20">
          <button className="text-DarkPrimary font-medium bg-LightGrey px-3 py-3">
            Get In touch
          </button>
        </div>
      </div>

      <div>
        <Image
          src={img7}
          alt="header Image"
          width={720}
          height={603}
          className="object-contain max-lg:w-[450px]"
        />
      </div>
    </div>
  );
};

export default Intouch;
