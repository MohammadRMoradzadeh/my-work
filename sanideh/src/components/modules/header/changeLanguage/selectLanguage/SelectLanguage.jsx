"use client";
import React from "react";
import { useSelector } from "react-redux";

function SelectLanguage({ children }) {
  const showSelectLanguageMenu = useSelector((state) => state.showLangMenu);

  return (
    <div
      className={`${
        showSelectLanguageMenu || "hidden"
      } absolute z-10 top-full left-1/2 translate-y-2 -translate-x-1/2 rounded-sm overflow-hidden`}
    >
      {children}
    </div>
  );
}

export default SelectLanguage;
