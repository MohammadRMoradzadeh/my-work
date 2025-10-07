import Background from "@/components/modules/footer/background/Background";
import ContactUs from "@/components/modules/footer/contactUs/ContactUs";
import MapPin from "@/components/modules/footer/mapPin/MapPin";
import NavLinks from "@/components/modules/footer/navLinks/NavLinks";
import RightOfUse from "@/components/modules/footer/rightOfUse/RightOfUse";
import { language } from "@/utils/dataContainer/language/language";
import React from "react";

function Footer({ lang = language.fa }) {
  return (
    <div className="w-full h-fit relative">
      <Background />
      <div className="w-full aspect-393/263 sm:aspect-144/35 absolute bottom-0 left-0 flex flex-col justify-between items-center ">
        <div className="container mx-auto px-4 flex justify-between">
          <ContactUs lang={lang} />
          <NavLinks lang={lang} />
          <MapPin />
        </div>
        <RightOfUse lang={lang} />
      </div>
    </div>
  );
}

export default Footer;
