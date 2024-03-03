import React from "react";
import image1 from "@/../public/assets/images/image3.jpeg";

const HeroSection = () => {
  return (
    <section className="md:h-[900px] px-24">
      <div className="flex flex-wrap h-full items-center md:justify-between">
        <div className="text-5xl md:w-[600px] font-bold leading-[56px]">
          <div className="text-secondaryBlue text-[42px]">
            Elevate excellence with
          </div>
          <div className="text-primaryLightBlue">Cutting-Edge Facilities</div>
          <div className="text-secondaryBlue text-[42px]">
            <span className="text-primaryLightBlue">Management</span> solutions
          </div>
          <div className="font-normal text-base leading-4 text-lightGray mt-5">
            Discover a spectrum of services designed to optimize your business
            infrastructure and drive unparalleled efficiency
          </div>

          <div className="flex gap-5 mt-10">
            <button className="bg-primaryBlue rounded-lg text-white py-4 px-12 font-bold text-lg">
              Explore services
            </button>
            <button className="rounded-lg border border-primaryBlue py-4 px-12 font-bold text-lg">
              Connect now
            </button>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="shadow-[0_4px_24px_-1px_#00000033] rounded-2xl  backdrop-blur-md  h-44 w-[286px] absolute bottom-0 translate-y-2/4 -translate-x-2/4 left-0"></div>
            <div className="shadow-[0_4px_24px_-1px_#00000033] rounded-2xl  backdrop-blur-md  h-20 w-20 absolute bottom-0 -translate-y-3/4 -translate-x-3/4 left-0 z-10"></div>
            <img
              src={image1.src}
              className="md:h-[502px] md:w-[756px] rounded-2xl"
            />
            <div className="shadow-[0_4px_24px_-1px_#00000033] rounded-2xl  backdrop-blur-md  h-44 w-[286px] absolute top-0 -translate-y-2/4 translate-x-1/4 right-0"></div>
            <div className="shadow-[0_4px_24px_-1px_#00000033] rounded-2xl  backdrop-blur-md  h-20 w-20 absolute top-0 translate-y-3/4 translate-x-1/4 right-0 z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
