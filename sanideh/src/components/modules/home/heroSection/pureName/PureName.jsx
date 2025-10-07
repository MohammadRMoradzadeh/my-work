import { companyName } from "@/utils/dataContainer/companyName/companyName";
import { language } from "@/utils/dataContainer/language/language";
import React from "react";

function PureName({ lang = language.fa }) {
  return (
    <p className="rtl:font-Pinar rtl:font-semibold rtl:text-80 text-Secondary ltr:font-BebasNeue ltr:text-108 ltr:capitalize ltr:leading-16">
      {companyName.pureName[lang]}
    </p>
  );
}

export default PureName;
