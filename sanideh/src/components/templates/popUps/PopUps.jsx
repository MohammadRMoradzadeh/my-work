import React from "react";
import Drawer from "../drawer/Drawer";
import { language } from "@/utils/dataContainer/language/language";

function PopUps({ lang = language.fa }) {
  return (
    <>
      <Drawer lang={lang} />
    </>
  );
}

export default PopUps;
