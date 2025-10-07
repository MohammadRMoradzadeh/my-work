import ContactUs from "@/components/templates/contactUs/ContactUs";
import Header from "@/components/templates/header/Header";
import { language } from "@/utils/dataContainer/language/language";
import React from "react";
function page() {
  const lang = language.en;
  const route = 3;
  return (
    <>
      <Header lang={lang} route={route} />
      <ContactUs lang={lang} />
    </>
  );
}

export default page;
