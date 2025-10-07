import { companyName } from "@/utils/dataContainer/companyName/companyName";
import { language } from "@/utils/dataContainer/language/language";
import React from "react";

function NamePrefix({ lang = language.fa }) {
  return (
    <div
      className={`${
        lang === language.fa
          ? "font-Pinar font-semibold text-16"
          : "font-BebasNeue capitalize text-20"
      } leading-none text-BW-2`}
    >
      {companyName.namePrefix[lang]}
    </div>
  );
}

export default NamePrefix;
