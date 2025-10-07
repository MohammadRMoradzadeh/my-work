import { companyName } from "@/utils/dataContainer/companyName/companyName";
import { language } from "@/utils/dataContainer/language/language";
import React from "react";

function NamePrefix({ lang = language.fa }) {
  return (
    <p className="rtl:font-Pinar rtl:font-semibold rtl:text-20 text-BW-white ltr:font-BebasNeue ltr:text-32 ltr:capitalize">
      {companyName.namePrefix[lang]}
    </p>
  );
}

export default NamePrefix;
