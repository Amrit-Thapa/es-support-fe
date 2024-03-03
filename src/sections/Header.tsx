import React from "react";
import Logo from "@/../public/assets/es-support-log.png";

const Header = () => {
  return (
    <div className="h-14 md:h-24 shadow-lg flex items-center justify-between px-16">
      <div className="flex gap-3">
        <img
          src={Logo.src}
          width={72}
          height={54}
          className="h-[54px] w-[72px] object-contain inline"
        />
        <div className="m-auto">
          <div className="font-bold text-xl ">Es-support</div>
          <div className="font-medium text-[9px]">
            solution upto satisfaction
          </div>
        </div>
      </div>
      <div className="flex items-center gap-10 font-bold text-lg">
        <div className="underline">Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Projects</div>
        <div>Blog</div>
        <button className="bg-primaryBlue rounded-lg text-white py-4 px-12 font-bold text-lg">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Header;
