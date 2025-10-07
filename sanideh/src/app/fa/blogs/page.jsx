import Header from "@/components/templates/header/Header";
import { language } from "@/utils/dataContainer/language/language";
import React from "react";

function page() {
  return (
    <>
      <Header lang={language.fa} route={2} />
    </>
  );
}

export default page;
