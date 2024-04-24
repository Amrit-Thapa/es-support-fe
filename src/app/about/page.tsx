import Footer from "@/sections/Footer";
import GetInTouch from "@/sections/GetInTouch";
import Header from "@/sections/Header";
import React from "react";
import Hero from "./Hero";
import OurValues from "./OurValues";

const Page = () => {
  return (
    <>
      <div className="bg-[#FF710014]">
        <Header />
        <Hero />
      </div>
      <OurValues/>
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Page;
