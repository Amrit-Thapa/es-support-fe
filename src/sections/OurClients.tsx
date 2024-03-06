import {SectionHead} from "@/components/utilityComponents";
import React from "react";
import Csri from "@/../public/assets/images/csir.png";
import genpact from "@/../public/assets/images/Genpact.png";
import hcl from "@/../public/assets/images/HCL.png";
import future from "@/../public/assets/images/Future-group.png";

const OurClients = () => {
  return (
    <section className="p-24 bg-[#F9F4F1]">
      <h1 className="text-[40px] font-bold">Our Clients</h1>
      <div className="whitespace-nowrap h-[70px] overflow-x-auto mt-10">
        <img src={Csri.src} className="inline-block mr-2 h-16" />
        <img src={genpact.src} className="inline-block mr-2 h-16" />
        <img src={hcl.src} className="inline-block mr-2 h-16" />
        <img src={future.src} className="inline-block mr-2 h-16" />
        <img src={future.src} className="inline-block mr-2 h-16" />
        <img src={future.src} className="inline-block mr-2 h-16" />
        <img src={future.src} className="inline-block mr-2 h-16" />
        <img src={future.src} className="inline-block mr-2 h-16" />
        <img src={future.src} className="inline-block mr-2 h-16" />
        <img src={future.src} className="inline-block mr-2 h-16" />
        <img src={future.src} className="inline-block mr-2 h-16" />
        <img src={future.src} className="inline-block mr-2 h-16" />
        <img src={future.src} className="inline-block mr-2 h-16" />
      </div>
    </section>
  );
};

export default OurClients;
