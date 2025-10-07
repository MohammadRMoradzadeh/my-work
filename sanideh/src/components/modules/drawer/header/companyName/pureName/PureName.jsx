import { companyName } from "@/utils/dataContainer/companyName/companyName";
import { language } from "@/utils/dataContainer/language/language";
import React from "react";

function PureName({ lang = language.fa }) {
  return (
    <div
      className={`${
        lang === language.fa
          ? "font-Pinar font-semibold text-40"
          : "font-BebasNeue capitalize text-56"
      } leading-none text-Secondary`}
    >
      {companyName.pureName[lang]}
    </div>
  );
}

export default PureName;
