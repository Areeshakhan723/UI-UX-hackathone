import Image from "next/image";
import Navbar from "../component/Navbar";
const Header = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center mt-4 max-lg:px-3">
        <div className="bg-DarkPrimary padding w-[880px] h-[500px] max-md:h-auto">
          <div className="w-full">
            <h1 className="text-white text-[32px] max-w-[470px] leading-10">
              The furniture brand for the future, with timeless designs
            </h1>
          </div>

          <div className="mt-10">
            <button className="text-white text-base bg-Primary bg-opacity-50 px-3 py-3  hover:bg-LightGrey hover:text-DarkPrimary">
              View Collection
            </button>
          </div>
          <div className="w-full mt-20">
            <p className="text-white max-w-[570px] leading-normal text-lg">
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>
        </div>

        <div className="max-md:hidden">
          <Image
            src={"/assets/Photo.png"}
            alt="header Image"
            width={420}
            height={500}
            className="object-fill h-[500px] w-auto"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Header;
