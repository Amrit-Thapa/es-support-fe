import React from "react";
import getInTouch from "@/../public/assets/images/getInTouch.png";

const GetInTouch = () => {
  return (
    <section className="bg-lightOrange">
      <div className="container mx-auto px-4 py-16 md:px-24 md:py-32">
        <div
          style={{"--image-url": `url(${getInTouch.src})`} as {}}
          className="bg-[image:var(--image-url)] md:h-[375px] h-36 flex items-center justify-center text-[#EFFEFF] bg-[#162023] rounded-lg"
        >
          <div className="text-center md:space-y-10 space-y-5">
            <div>
              <div className="md:text-[48px] font-bold">Get in Touch</div>
              <div className="text-[9px] md:text-base">
                To connect with more people and discuss in strategy
              </div>
            </div>
            <button className="bg-[#EFFEFF] text-black md:py-4 md:px-8 px-4 py-2 rounded-md text-[9px] md:text-base">
              Connect now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
