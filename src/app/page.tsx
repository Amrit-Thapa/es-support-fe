import Header from "@/sections/Header";
import HeroSection from "@/sections/HeroSection";
import OurClients from "@/sections/OurClients";
import WhyUs from "@/sections/WhyUs";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="bg-shade">
        <Header />
        <HeroSection />
      </div>
      <WhyUs />
      <OurClients />
    </>
  );
}
