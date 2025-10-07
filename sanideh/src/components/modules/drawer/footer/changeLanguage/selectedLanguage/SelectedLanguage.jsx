"use client";
import { setShowLangMenu } from "@/app/redux/slices/showLangMenu";
import { language } from "@/utils/dataContainer/language/language";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { useDispatch } from "react-redux";
import React from "react";

function SelectedLanguage({ lang = language.fa }) {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(setShowLangMenu());
  };
  return (
    <div
      onClick={onClickHandler}
      className="flex items-center gap-x-2 cursor-pointer"
    >
      <CaretDown
        size={"1rem"}
        color="#D0A767"
        weight="fill"
        className="rotate-180"
      />
      <p
        className={`${language.font[lang]} font-medium ${
          lang === language.fa ? "text-18" : "text-16"
        }  text-BW-2`}
      >
        {language.title[lang]}
      </p>
      <img src="/images/header/language/language.svg" alt="language logo" />
    </div>
  );
}

export default SelectedLanguage;
