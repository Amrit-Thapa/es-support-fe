import Csri from "@/../public/assets/images/csir.png";
import genpact from "@/../public/assets/images/Genpact.png";
import hcl from "@/../public/assets/images/HCL.png";
import future from "@/../public/assets/images/Future-group.png";
import "@/app/globals.css";

const OurClients = () => {
  return (
    <section className="bg-lightOrange">
      <div className="container mx-auto px-4 py-16 md:px-24 md:py-32">
        <div className="text-center md:text-left font-bold md:text-4xl">
          Our Clients
        </div>
        <div className="mt-10">
          <div className="whitespace-nowrap h-[42px] overflow-x-auto sm:scroll-box flex space-x-4">
            <img src={Csri.src} className="" />
            <img src={genpact.src} className="" />
            <img src={hcl.src} className="" />
            <img src={future.src} className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
