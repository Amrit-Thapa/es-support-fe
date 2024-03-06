import React from "react";
import Relation from "@/../public/assets/images/keyFeature.png";
import stack from "@/../public/assets/icons/stack.png";
import group from "@/../public/assets/icons/Group.png";
import bulb from "@/../public/assets/icons/bulb.png";
import idea from "@/../public/assets/icons/idea.png";
import graph from "@/../public/assets/icons/graph.png";

const KeyFeature = () => {
  return (
    <section className="p-24 flex gap-36">
      <div className="space-y-10 shrink-0">
        <div className="text-[40px] font-bold">
          <div>Key features we</div>
          <span>always taken care of</span>
        </div>
        <img src={Relation.src} width={581} height="auto" />
      </div>
      <div className="space-y-14">
        <div className="pt-10">
          Our dedication goes beyond mere assistance – we excel in streamlining
          your operational expenses by providing skilled professionals and
          innovative technology solutions. Delegate your non-core
          responsibilities to us, and benefit from unmatched expertise and cost
          efficiency.
        </div>
        <div className="space-y-10">
          <div className="space-y-2">
            <div className="w-fit bg-[#121B2C] rounded-full px-2 py-3">
              <img src={stack.src} width={30} />
            </div>
            <div>
              <div className="font-bold text-2xl">Innovative Excellence</div>
              <div>
                Pioneering integrated business services across diverse industry
                sectors
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="w-fit bg-[#121B2C] rounded-full px-2 py-2.5">
              <img src={group.src} width={30} />
            </div>
            <div>
              <div className="font-bold text-2xl">Enduring Partnerships</div>
              <div>
                Cultivating strong customer bonds for sustainable and recurring
                business success
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="w-fit bg-[#121B2C] rounded-full p-2">
              <img
                src={idea.src}
                width={30}
                height={30}
                className="size-[30px]"
              />
            </div>
            <div>
              <div className="font-bold text-2xl">Strategic Mastery</div>
              <div>
                Demonstrating proven success through acquiring and integrating
                lucrative business niches
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="w-fit bg-[#121B2C] rounded-full p-2">
              <img src={graph.src} width={30} />
            </div>
            <div>
              <div className="font-bold text-2xl">Nationwide Impact</div>
              <div>
                Fostering growth through an extensive workforce and robust
                recruitment prowess
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="w-fit bg-[#121B2C] rounded-full p-2">
              <img src={bulb.src} width={30} />
            </div>
            <div>
              <div className="font-bold text-2xl">Tech-Led Vision</div>
              <div>
                Guiding business excellence through cutting-edge technology,
                today and tomorrow
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeature;
