import React from "react";
import { footerLinks } from "../constant";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-DarkPrimary text-white padding">
      <div className="flex justify-between max-xl:flex-col max-xl:gap-9 max-container">
        <div className="flex justify-between lg:items-center gap-40 max-w-[680px] max-lg:flex-col max-lg:gap-10">
          {/* footer links name */}
          {footerLinks.map((linkGroup) => (
            <div key={linkGroup.title}>
              <h4 className="leading-normal text-lg max-md:pb-3">
                {linkGroup.title}
              </h4>
              <ul>
                {/* inner footer link */}
                {linkGroup.links.map((link, index) => (
                  <li
                    key={index}
                    className="leading-7 text-sm max-sm:text-[16px] max-lg:text-[18px]"
                  >
                    <a href={link.link} className="">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-start items-start flex-col max-lg:justify-start max-lg:mt-6">
          {/* heading */}
          <h4 className="pb-2 text-lg tracking-wider max-md:text-[18px] max-xl:text-[20px]">
            Join our mailing list
          </h4>
          <div className="flex justify-center items-center">
            {/* card */}
            <div className="relative h-auto rounded-lg px-2">
              {/* Background Layer */}
              <div className="absolute inset-0 bg-[#4E4D93] opacity-50"></div>
              {/* content layer */}
              <div className="relative z-10">
                {/* form */}
                <form className="">
                  <input
                    type="text"
                    placeholder="your@email.com"
                    className="p-3 w-[420px] max-md:w-[180px] max-lg:w-[250px] outline-none text-white bg-transparent"
                  />
                </form>
              </div>
            </div>
            <button className="text-DarkPrimary text-center text-sm font-medium bg-LightGrey px-5 py-3 h-[48px] hover:bg-slate-300">
              Sign up
            </button>
          </div>
        </div>
      </div>
      {/* self closing tag */}
      <div className="w-full bg-Primary h-[0.5px] mt-16 mb-5" />
      <div className="max-container flex justify-between items-center max-lg:flex-col max-lg:gap-5 pb-0 mb-0">
        <p className="max-lg:text-[16px]"> Copyright 2024 Avion LTD</p>
        <div className="flex justify-center items-center gap-4">
          <Linkedin />
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
