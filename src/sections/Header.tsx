import React from "react";
import Logo from "@/../public/assets/es-support-log.png";

const Header = () => {
  return (
    <div className="h-14 md:h-24 shadow-lg">
      <div className="flex items-center my-auto">
        <img
          src={Logo.src}
          width={72}
          height={54}
          className="h-[54px] w-[72px] object-contain"
        />
      </div>
    </div>
  );
};

export default Header;
