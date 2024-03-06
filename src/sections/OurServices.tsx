import React from "react";
import service1 from "@/../public/assets/images/service1.png";
import service2 from "@/../public/assets/images/service2.png";
import service3 from "@/../public/assets/images/service3.png";
import service4 from "@/../public/assets/images/service4.png";
import service5 from "@/../public/assets/images/service5.png";
import service6 from "@/../public/assets/images/service6.png";
const OurServices = () => {
  return (
    <section className="p-24 bg-[#F9F4F1] text-white">
      <div className="">
        <div className="text-[40px] font-bold text-black">Our Clients</div>
        <div className="font-normal text-base text-black">
          ALL-IN-ONE SOLUTION
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <div
            style={{"--image-url": `url(${service1.src})`} as {}}
            className="bg-[image:var(--image-url)] h-[440px] w-[384px]"
          >
            <div className="bg-gradient-to-t from-[#162023] size-full justify-end p-5 flex flex-col gap-5">
              <div className="font-bold text-[24px]">
                Facility Management
                <div>(Soft Services)</div>
              </div>
              <div className="text-[#EFFEFF] font-normal text-base">
                Elevating efficiency through integrated facilities management
                solutions.
              </div>
              <button className="border border-[#EFFEFF] rounded-md w-fit py-2 px-4 text-sm font-normal">
                Know more
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{"--image-url": `url(${service2.src})`} as {}}
            className="bg-[image:var(--image-url)] h-[440px] w-[384px]"
          >
            <div className="bg-gradient-to-t from-[#162023] size-full justify-end p-5 flex flex-col gap-5">
              <div className="font-bold text-[24px]">
                Operation and Maintenance Services
              </div>
              <div className="text-[#EFFEFF] font-normal text-base">
                Fostering success by providing skilled professionals to drive
                your technology initiatives forward.
              </div>
              <button className="border border-[#EFFEFF] rounded-md w-fit py-2 px-4 text-sm font-normal">
                Know more
              </button>
            </div>
          </div>
          <div
            style={{"--image-url": `url(${service5.src})`} as {}}
            className="bg-[image:var(--image-url)] h-[440px] w-[384px]"
          >
            <div className="bg-gradient-to-t from-[#162023] size-full justify-end p-5 flex flex-col gap-5">
              <div className="font-bold text-[24px]">MEP Services</div>
              <div className="text-[#EFFEFF] font-normal text-base">
                Engineering excellence for seamless mechanical, electrical &
                plumbing solutions.
              </div>
              <button className="border border-[#EFFEFF] rounded-md w-fit py-2 px-4 text-sm font-normal">
                Know more
              </button>
            </div>
          </div>
        </div>
        <div className="mt-36">
          <div
            style={{"--image-url": `url(${service3.src})`} as {}}
            className="bg-[image:var(--image-url)] h-[440px] w-[384px]"
          >
            <div className="bg-gradient-to-t from-[#162023] size-full justify-end p-5 flex flex-col gap-5">
              <div className="font-bold text-[24px]">HVAC Services</div>
              <div className="text-[#EFFEFF] font-normal text-base">
                Climate control precision for comfort and efficiency in every
                environment.
              </div>
              <button className="border border-[#EFFEFF] rounded-md w-fit py-2 px-4 text-sm font-normal">
                Know more
              </button>
            </div>
          </div>
          <div
            style={{"--image-url": `url(${service6.src})`} as {}}
            className="bg-[image:var(--image-url)] h-[440px]"
          >
            <div className="bg-gradient-to-t from-[#162023] size-full justify-end p-5 flex flex-col gap-5">
              <div className="font-bold text-[24px]">
                Civil Engineering & Maintenance Services
              </div>
              <div className="text-[#EFFEFF] font-normal text-base">
                Shaping environments that transcend functionality, defining
                spaces where design meets precision and dreams become reality.
              </div>
              <button className="border border-[#EFFEFF] rounded-md w-fit py-2 px-4 text-sm font-normal">
                Know more
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{"--image-url": `url(${service4.src})`} as {}}
            className="bg-[image:var(--image-url)] h-[440px] w-[384px]"
          >
            <div className="bg-gradient-to-t from-[#162023] size-full justify-end p-5 flex flex-col gap-5">
              <div className="font-bold text-[24px]">Security Services</div>
              <div className="text-[#EFFEFF] font-normal text-base">
                Ensuring peace of mind through vigilant protection, where safety
                meets expertise.
              </div>
              <button className="border border-[#EFFEFF] rounded-md w-fit py-2 px-4 text-sm font-normal">
                Know more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
