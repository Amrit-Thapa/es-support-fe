import React from "react";
import getInTouch from "@/../public/assets/images/getInTouch.png";

const GetInTouch = () => {
  return (
    <section className="p-24 bg-[#F9F4F1]">
      <div className="bg-black size-full rounded-xl">
        <div
          style={{"--image-url": `url(${getInTouch.src})`} as {}}
          className="bg-[image:var(--image-url)] h-[375px] flex items-center justify-center text-[#EFFEFF]"
        >
          <div className="text-center space-y-10">
            <div>
              <div className="text-[48px] font-bold">Get in Touch</div>
              <div>To connect with more people and discuss in strategy</div>
            </div>
            <button className="bg-[#EFFEFF] text-black py-4 px-8 rounded-md">
              Connect now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
