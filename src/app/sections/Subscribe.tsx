import React from "react";

const Subscribe = () => {
  return (
    <div className="padding bg-LightGrey  w-full">
      <div className="bg-white flex justify-center items-center flex-col h-auto max-lg:p-3">
        <div className="max-w-[680px] ">
          <h1 className="text-center text-black text-[30px] padding-t">
            Join the club and get the benefits
          </h1>
          <p className="max-w-[480px] text-center text-black text-[18pxpx] pt-4">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
        </div>
        <div className="mt-8 flex max-lg:flex-col max-lg:justify-center">
          <input
            type="text"
            placeholder="your@email.com"
            className="bg-LightGrey p-3 mb-4 w-[320px] max-lg:w-[250px] outline-none text-DarkPrimary"
          />
          <button className="text-white text-center text-sm font-medium bg-DarkPrimary px-5 py-3 h-[48px]  hover:bg-Primary">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
