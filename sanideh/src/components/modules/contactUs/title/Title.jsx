import { contact_us_title } from "@/utils/dataContainer/contact-us/contact-us";
import { language } from "@/utils/dataContainer/language/language";
import { homeSectionsTitle } from "@/utils/dataContainer/sectionsTitle/sectionsTitle";
import React from "react";

function Title({ lang = language.fa }) {
  return (
    <>
      <div className="flex flex-col mt-6 sm:mt-16">
        <div className="w-fit flex items-center gap-x-2.5 sm:gap-x-3.5">
          <div className="w-fit flex">
            <div className="w-0.75 sm:w-1 h-8 sm:h-11 bg-Secondary"></div>
            <div
              className={`w-1 sm:w-1.5 h-8 sm:h-11 bg-primary  rounded-e-full`}
            ></div>
          </div>
          <p className="ltr:font-BebasNeue rtl:font-Pinar text-Secondary rtl:font-bold rtl:text-24 sm:rtl:text-36 ltr:text-32 sm:ltr:text-64">
            {contact_us_title[lang].title}
          </p>
        </div>
        <p
          className={`ms-4.25 sm:ms-6 ltr:font-Roboto rtl:font-Pinar text-text-100
        font-bold text-14 sm:rtl:text-20 sm:ltr:text-22`}
        >
          {contact_us_title[lang].subTitle}
        </p>
      </div>
    </>
  );
}

export default Title;
