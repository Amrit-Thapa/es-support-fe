import Footer from "@/sections/Footer";
import GetInTouch from "@/sections/GetInTouch";
import Header from "@/sections/Header";
import React from "react";
import Directors from "./Directors";
import Hero from "./Hero";
import OurValues from "./OurValues";
import VisionMission from "./VisionMission";

const Page = () => {
  return (
    <>
      <div className="bg-[#FF710014]">
        <Header />
        <Hero />
      </div>
      <OurValues />
      <Directors />
      <VisionMission />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Page;
