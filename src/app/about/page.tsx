import Footer from "@/sections/Footer";
import GetInTouch from "@/sections/GetInTouch";
import Header from "@/sections/Header";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="bg-shade1">
        <Header />
        {/* <HeroSection /> */}
      </div>
      {/* <WhyUs />
      <OurClients />
      <AboutUs />
      <OurServices /> */}
      {/* <KeyFeature /> */}
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Page;
