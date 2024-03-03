import React from "react";
import {SectionHead} from "../components/utilityComponents";
import TwentyFour from "@/../public/assets/icons/twentyfour.png";
import Project from "@/../public/assets/icons/project.png";
import dedicated from "@/../public/assets/icons/dedicated.png";
import invest from "@/../public/assets/icons/invest.png";

const WhyUs = () => {
  return (
    <section className="flex justify-between items-start">
      <div className="ml-24">
        <SectionHead white={false}>Why choose us</SectionHead>
      </div>
      <div className="flex flex-wrap w-[1150px] gap-5 bg-primaryBlue p-10 text-white rounded-l-3xl">
        <div className="">
          <img src={invest.src} className="h-[88px] w-[88px]" />
          <div className="mt-5">
            <div className="font-bold text-2xl">24x7 Client Support</div>
            <div className="font-normal text-base">
              Ensures round-the-clock assistance, fostering customer
              satisfaction.
            </div>
          </div>
        </div>
        <div className="">
          <img src={dedicated.src} className="h-[88px] w-[88px]" />
          <div className="mt-5">
            <div className="font-bold text-2xl">24x7 Client Support</div>
            <div className="font-normal text-base">
              Ensures round-the-clock assistance, fostering customer
              satisfaction.
            </div>
          </div>
        </div>
        <div className="">
          <img src={Project.src} className="h-[88px] w-[88px]" />
          <div className="mt-5">
            <div className="font-bold text-2xl">24x7 Client Support</div>
            <div className="font-normal text-base">
              Ensures round-the-clock assistance, fostering customer
              satisfaction.
            </div>
          </div>
        </div>
        <div className="">
          <img src={TwentyFour.src} className="h-[88px] w-[88px]" />
          <div className="mt-5">
            <div className="font-bold text-2xl">24x7 Client Support</div>
            <div className="font-normal text-base">
              Ensures round-the-clock assistance, fostering customer
              satisfaction.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
