import FeatureItem from "@/components/modules/home/aboutUsSection/featureItem/FeatureItem";
import SidePicture from "@/components/modules/home/aboutUsSection/sidePicture/SidePicture";
import SectionsTitle from "@/components/modules/home/SectionsTitle";
import { aboutUsSection } from "@/utils/dataContainer/aboutUsSection/aboutUsSection";
import { language } from "@/utils/dataContainer/language/language";
import React from "react";

function AboutUsSection({ lang = language.fa }) {
  return (
    <div
      id="about-us"
      className=" sm:container mx-auto px-4 flex gap-x-13 mt-9 sm:mt-16.25"
    >
      <SidePicture />
      <div className="flex flex-1 flex-col sm:pt-16.25">
        <SectionsTitle lang={lang} />
        <SidePicture mobile />
        <p className="text-text-90 font-medium rtl:font-Pinar ltr:font-Roboto rtl:text-14 sm:rtl:text-16 ltr:text-16 sm:ltr:text-18 rtl:text-justify mt-5 sm:rtl:mt-6 sm:ltr:mt-10 sm:ms-6">
          {aboutUsSection.description[lang]}
        </p>
        <ul className="w-full flex rtl:flex-row-reverse justify-around items-center rtl:mt-10 sm:rtl:mt-13.5 ltr:mt-13.5 sm:ltr:mt-20.5">
          {aboutUsSection.features.map((item, index) => {
            const { icon, title } = item;
            return <FeatureItem key={index} icon={icon} title={title[lang]} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default AboutUsSection;
