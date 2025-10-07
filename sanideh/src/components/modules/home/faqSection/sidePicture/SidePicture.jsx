import React from "react";
import { FAQ_Title } from "@/utils/dataContainer/FAQ/FAQ";
import { language } from "@/utils/dataContainer/language/language";
function SidePicture({ lang = language.fa }) {
  return (
    <div className="w-full sm:w-5/12 aspect-159/112 relative">
      <img
        src="/images/FAQ/question.svg"
        className="absolute top-0 left-0 z-50 w-full h-full bg-cover bg-center "
        alt=""
      />
      <p className="absolute z-0 left-1/2 -translate-x-1/2 rtl:-top-14 ltr:-top-22  sm:-top-20   rtl:font-Pinar rtl:font-semibold rtl:text-48 sm:rtl:text-74 ltr:font-BebasNeue ltr:text-166 text-primary text-nowrap ">
        {FAQ_Title[lang]}
      </p>
      <p className="absolute z-0 left-1/2 -translate-x-1/2 rtl:-top-14 ltr:-top-22 sm:-top-20  rtl:font-Pinar rtl:font-semibold rtl:text-46 sm:rtl:text-72 ltr:font-BebasNeue ltr:text-164 text-background text-nowrap ">
        {FAQ_Title[lang]}
      </p>
    </div>
  );
}

export default SidePicture;
