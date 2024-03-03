import {SectionHead} from "@/components/utilityComponents";
import React from "react";
import Csri from "@/../public/assets/images/csir.png";
import genpact from "@/../public/assets/images/Genpact.png";
import hcl from "@/../public/assets/images/HCL.png";
import future from "@/../public/assets/images/Future-group.png";

const OurClients = () => {
  return (
    <section className="p-24 mt-20 text-center">
      <SectionHead white={false}>Our Clients</SectionHead>
      <div className="flex rounded-2xl shadow-lg px-3 py-5 justify-between p-10">
        <img src={Csri.src} />
        <img src={genpact.src} />
        <img src={hcl.src} />
        <img src={future.src} />
      </div>
    </section>
  );
};

export default OurClients;
