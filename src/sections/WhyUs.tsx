import React from "react";
import {SectionHead} from "../components/utilityComponents";
import TwentyFour from "@/../public/assets/icons/twentyfour.png";
import Project from "@/../public/assets/icons/project.png";
import dedicated from "@/../public/assets/icons/dedicated.png";
import invest from "@/../public/assets/icons/invest.png";

const WhyUs = () => {
  return (
    <section className="bg-[#162023] text-white p-24">
      <h1 className="text-[40px] font-bold">Why choose us</h1>
      <div className="flex flex-wrap justify-between gap-10 rounded-l-3xl mt-10">
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
