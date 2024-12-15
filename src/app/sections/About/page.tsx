import Image from "next/image";
import Intouch from "../Intouch";
import { img16 } from "@/app/constant/images";
import Features from "../Features";
import Subscribe from "../Subscribe";
import Topnav from "@/app/component/Topnav";
import MobileNav from "@/app/component/MobileNavbar";

const page = () => {
  return (
    <>
    <Topnav />
    <MobileNav />
      <div className="w-full flex justify-center items-center py-20 max-lg:py-10 max-lg:p-3">
        <h1 className="text-center text-4xl max-md:text-2xl text-DarkPrimary max-w-[780px] font-semibold leading-10">
          A brand built on the love of craftmanship, quality and outstanding
          customer service
        </h1>
      </div>
      {/* Intouch section */}
      <Intouch />
      <div className="bg-white max-container">
        <div className="w-full flex justify-between items-center max-lg:flex-col max-lg:gap-6">
          <Image
            src={img16}
            alt="header Image"
            width={720}
            height={603}
            className="object-contain max-lg:w-[450px]"
          />
          <div className="max-md:h-auto padding-x">
            <h1 className="text-DarkPrimary text-[32px] max-lg:text-[28px] max-w-[570px] leading-10">
              Our service isn’t just personal, it’s actually hyper personally
              exquisite
            </h1>

            <div className="w-full mt-20 max-w-[570px]">
              <p className="text-black leading-normal text-lg">
                When we started Avion, the idea was simple. Make high quality
                furniture affordable and available for the mass market.
              </p>
              <p className="mt-4 text-black leading-normal text-lg">
                Handmade, and lovingly crafted furniture and homeware is what we
                live, breathe and design so our Chelsea boutique become the
                hotbed for the London interior design community.
              </p>
            </div>
            <div className="mt-20">
              <button className="text-DarkPrimary font-medium bg-LightGrey px-3 py-3">
                Get In touch
              </button>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Subscribe />
    </>
  );
};

export default page;
