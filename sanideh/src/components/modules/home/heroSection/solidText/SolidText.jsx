import { solid_Text } from "@/utils/dataContainer/heroSection/heroSection";
import { language } from "@/utils/dataContainer/language/language";
import React from "react";

function SolidText({ lang = language.fa }) {
  return (
    <p className="text-nowrap rtl:font-Pinar rtl:font-semibold rtl:text-16 sm:rtl:text-20  text-BW-white ltr:font-BebasNeue ltr:text-40 sm:ltr:text-80 ltr:capitalize flex flex-col items-center ltr:leading-10 sm:ltr:leading-16">
      {solid_Text[lang].map((text) => {
        return <span key={text}>{text}</span>;
      })}
    </p>
  );
}

export default SolidText;
