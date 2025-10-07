import { language } from "@/utils/dataContainer/language/language";
import React from "react";

function CurrentPage({ lang = language.fa, children }) {
  return (
    <p
      className={`min-w-fit ${language.font[lang]} font-extrabold text-16 text-BW-14`}
    >
      {children}
    </p>
  );
}

export default CurrentPage;
