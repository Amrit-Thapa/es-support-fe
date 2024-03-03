import Header from "@/sections/Header";
import IntroSection from "@/sections/IntroSection";
import WhyUs from "@/sections/WhyUs";
import "./globals.css";

export default function Home() {
  return (
    <div className="relative">
      <div className="bg-shade">
        <Header />
        <IntroSection />
        <WhyUs />
      </div>
    </div>
  );
}
