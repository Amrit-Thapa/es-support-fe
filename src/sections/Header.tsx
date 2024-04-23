"use client";
import React from "react";
import Logo from "@/../public/assets/es-support-log.png";
import useDeviceType from "@/hooks/useDeviceType";
import Image from "next/image";
import {AlignJustify, ChevronDown, X} from "lucide-react";

const Header = () => {
  const device = useDeviceType();
  const [menu, setMenu] = React.useState(false);
  const web = device === "web";
  return (
    <div className="h-14 md:h-24 shadow-lg py-5">
      <div className="container px-4 m-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div>
            <Image
              alt="logo"
              src={Logo.src}
              width={web ? 72 : 34}
              height={web ? 54 : 25}
            />
          </div>
          <div>
            <div className="font-bold md:text-xl text-xs">Es-support</div>
            <div className="font-medium md:text-[9px] text-[5px]">
              solution upto satisfaction
            </div>
          </div>
        </div>
        <div className="md:flex items-center gap-10 font-bold text-lg hidden">
          <div className="">Home</div>
          <div>
            About
            <ChevronDown className="inline" />
          </div>
          <div>
            Services
            <ChevronDown className="inline" />
          </div>
          <div>Projects</div>
          <div>Blog</div>
          <button className="bg-primaryBlue rounded-lg text-white py-3 px-11 font-bold text-lg">
            Contact Us
          </button>
        </div>
        <button className="md:hidden" onClick={() => setMenu(true)}>
          <AlignJustify />
        </button>
      </div>
      {menu && (
        <div className="w-full h-[800px] bg-primaryBlue text-white p-20 absolute top-0 left-0 space-y-10">
          <X
            className="absolute text-white top-5 right-5 cursor-pointer"
            onClick={() => setMenu(false)}
          />
          <div>Home</div>
          <div>About</div>
          <div>Service</div>
          <div>Projects</div>
          <div>Blogs</div>
          <button className="bg-white rounded-lg py-3 px-11 text-primaryBlue font-bold text-lg">
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
