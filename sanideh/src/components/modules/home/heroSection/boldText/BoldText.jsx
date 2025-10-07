import { bold_Text } from "@/utils/dataContainer/heroSection/heroSection";
import { language } from "@/utils/dataContainer/language/language";
import React from "react";

function BoldText({ lang = language.fa }) {
  return (
    <div className="bg-BW-white px-0.5 py-1">
      <p className="rtl:font-Pinar rtl:font-semibold rtl:text-16 sm:rtl:text-20  text-primary ltr:font-BebasNeue ltr:text-22 sm:ltr:text-32 ltr:capitalize">
        {bold_Text[lang]}
      </p>
    </div>
  );
}

export default BoldText;
