import { language } from "@/utils/dataContainer/language/language";
import {
  homeSections,
  homeSectionsTitle,
} from "@/utils/dataContainer/sectionsTitle/sectionsTitle";
import React from "react";

function SectionsTitle({
  lang = language.fa,
  section = homeSections.aboutUs,
  bgPrimary = false,
}) {
  return (
    <div className="flex flex-col">
      <div className="w-fit flex items-center gap-x-2.5 sm:gap-x-3.5">
        <div className="w-fit flex">
          <div className="w-0.75 sm:w-1 h-8 sm:h-11 bg-Secondary"></div>
          <div
            className={`w-1 sm:w-1.5 h-8 sm:h-11 ${
              bgPrimary ? "bg-BW-3" : "bg-primary"
            }  rounded-e-full`}
          ></div>
        </div>
        <p className="ltr:font-BebasNeue rtl:font-Pinar text-Secondary rtl:font-bold rtl:text-24 sm:rtl:text-36 ltr:text-32 sm:ltr:text-64">
          {homeSectionsTitle[section][lang].title}
        </p>
      </div>
      <p
        className={`ms-4.25 sm:ms-6 ltr:font-Roboto rtl:font-Pinar ${
          bgPrimary ? "text-BW-14" : "text-text-100"
        }  font-bold text-14 sm:rtl:text-20 sm:ltr:text-22`}
      >
        {homeSectionsTitle[section][lang].subTitle}
      </p>
    </div>
  );
}

export default SectionsTitle;
