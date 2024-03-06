import {SectionHead} from "@/components/utilityComponents";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#FF7100] text-white h-[348px] p-24 relative">
      <div className="text-[40px] font-bold">About us</div>

      <div className="shadow-[0_4px_24px_-1px_#00000033]  backdrop-blur-md  size-[100px] absolute bottom-0 left-0 ">
        <div className="shadow-[0_4px_24px_-1px_#00000033] rounded-2xl  backdrop-blur-md  size-16 absolute bottom-0 left-16 z-10 -translate-y-16"></div>
      </div>
      <div className="text-justify leading-[19px] font-normal mt-[24px] ">
        Elevating work environments across the nation through professional
        facilities management. Established in January 2022, ES Support has
        firmly established itself in India as a delivering professional
        solutions ranging from new setup as well as operation and maintenance of
        <span className="font-semibold">
          existing Electrical, Facilities Management, Civil & Interiors, IT, MEP
          and Security systems
        </span>
        .We are working with extreme slogan   SOLUTION UPTO SATISFACTION. our
        influence extends across PAN INDIA locations With a steadfast
        commitment, we cater to a diverse clientele, playing a pivotal role in
        the evolution of workspaces into hubs of excellence.
      </div>
      <div className="shadow-[0_4px_24px_-1px_#00000033] rounded-2xl  backdrop-blur-md  size-16 absolute top-0 right-16 z-10 translate-y-16"></div>
      <div className="shadow-[0_4px_24px_-1px_#00000033]  backdrop-blur-xsm  size-[100px] absolute top-0 right-0"></div>
    </div>
  );
};

export default AboutUs;
