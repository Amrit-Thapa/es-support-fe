import React from "react";
import Logo from "@/../public/assets/es-support-log.png";
import phone from "@/../public/assets/icons/phone.png";
import mail from "@/../public/assets/icons/mail.png";
import facebook from "@/../public/assets/icons/facebook.png";
import twitter from "@/../public/assets/icons/twitter.png";
import linkedin from "@/../public/assets/icons/linkedin.png";
import insta from "@/../public/assets/icons/insta.png";

const Footer = () => {
  return (
    <section className="p-24 bg-[#162023] text-[#EFFEFF]">
      <div className="flex justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-3 w-fit">
            <img
              src={Logo.src}
              width={72}
              height={54}
              className="h-[54px] w-[72px] object-contain inline"
            />
            <div className="m-auto">
              <div className="font-bold text-xl ">Es-support</div>
              <div className="font-medium text-[9px]">
                solution upto satisfaction
              </div>
            </div>
          </div>
          <div className="w-[280px]">
            Elevating work environments across the nation through professional
            facilities management.
          </div>
          <div className="space-y-5">
            <div>
              <img src={mail.src} className="inline" />
              <a href="mailto:support@essupport.in" className="ml-2">
                support@essupport.in
              </a>
            </div>
            <div>
              <img src={phone.src} className="inline" />
              <a href="tel:+919718767374" className="ml-2">
                +91-9718767374
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="font-semibold text-lg">Services</div>
          <div className="space-y-2">
            <div>Facility Management</div>
            <div>MEP Services</div>
            <div>HVAC Services</div>
            <div>Security Services</div>
            <div>Operation & Maintenance</div>
            <div>Civil & Maintenance</div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="font-semibold text-lg">Company</div>
          <div className="space-y-2">
            <div>About</div>
            <div>Blog</div>
            <div>Project</div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="font-semibold text-lg">Legal</div>
          <div className="space-y-2">
            <div>Claim</div>
            <div>Privacy</div>
            <div>Terms</div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="font-semibold text-lg">Socials</div>
          <div className="flex items-center gap-2">
            <img src={facebook.src} width={30} />
            <img src={twitter.src} width={30} />
            <img src={insta.src} width={30} />
            <img src={linkedin.src} width={30} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
