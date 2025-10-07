import { language } from "@/utils/dataContainer/language/language";
import React from "react";
import NamePrefix from "./namePrefix/NamePrefix";
import PureName from "./pureName/PureName";

function CompanyName({ lang = language.fa }) {
  return (
    <div
      className={`h-full flex flex-col justify-between  ${
        lang === language.fa ? "gap-y-3 mt-2" : "gap-y-1"
      }`}
    >
      <NamePrefix lang={lang} />
      <PureName lang={lang} />
    </div>
  );
}

export default CompanyName;
