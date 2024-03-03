import React from "react";
import {SectionHead, Container} from "../components/utilityComponents";
import TwentyFour from "@/../public/assets/icons/twentyfour.png";
import Image from "next/image";

const WhyUs = () => {
  return (
    <section className="bg-darkGray text-white p-5 md:p-20">
      <div className="py-12">
        <SectionHead white>Why choose us</SectionHead>
      </div>
      <div className="flex flex-wrap gap-10 justify-between">
        <div className="flex gap-2 ">
          <Image src={TwentyFour} />
          <div>
            <div>24x7 Client Support</div>
            <div>
              Ensures round-the-clock assistance, fostering customer
              satisfaction.
            </div>
          </div>
        </div>
        <div className="flex gap-2 ">
          <Image src={TwentyFour} />
          <div>
            <div>24x7 Client Support</div>
            <div>
              Ensures round-the-clock assistance, fostering customer
              satisfaction.
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-end">
          <Image src={TwentyFour} />
          <div className="h-fit">
            <div>24x7 Client Support</div>
            <div>
              Ensures round-the-clock assistance, fostering customer
              satisfaction.
            </div>
          </div>
        </div>
        <div className="flex gap-2 ">
          <Image src={TwentyFour} />
          <div>
            <div>24x7 Client Support</div>
            <div>
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
