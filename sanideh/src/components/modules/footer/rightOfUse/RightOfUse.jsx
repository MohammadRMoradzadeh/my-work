import { Right_Of_Use } from "@/utils/dataContainer/footer/Footer";
import { language } from "@/utils/dataContainer/language/language";
import React from "react";

function RightOfUse({ lang = language.fa }) {
    const font = language.font[lang];
  return (
    <p className={`${font} text-10 sm:text-16 text-BW-white mb-1.5`}>
      {Right_Of_Use[lang]}
    </p>
  );
}

export default RightOfUse;
