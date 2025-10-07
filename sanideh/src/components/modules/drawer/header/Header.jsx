import { language } from "@/utils/dataContainer/language/language";
import React from "react";

import CompanyName from "./companyName/CompanyName";
import Logo from "./logo/Logo";

function Header({ lang = language.fa }) {
  return (
    <div className="h-fit w-full flex justify-center  gap-x-5.5 pt-5">
      <Logo />
      <CompanyName lang={lang} />
    </div>
  );
}

export default Header;
