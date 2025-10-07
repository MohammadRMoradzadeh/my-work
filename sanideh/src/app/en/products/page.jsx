import Header from "@/components/templates/header/Header";
import { language } from "@/utils/dataContainer/language/language";
import React from "react";
function page() {
  return (
    <>
      <Header lang={language.en} route={1} />
    </>
  );
}

export default page;
