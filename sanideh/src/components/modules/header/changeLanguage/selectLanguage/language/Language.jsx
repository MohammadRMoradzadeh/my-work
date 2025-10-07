"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { language } from "@/utils/dataContainer/language/language";
import { unsetShowLangMenu } from "@/app/redux/slices/showLangMenu";
import { useDispatch } from "react-redux";
function Language({ lang = language.fa }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const currentPath = usePathname();
  const purePath = currentPath.slice(3);
  const langPath = `/${lang}${purePath}`;
  const onClickHandler = () => {
    if (currentPath !== langPath) {
      router.push(langPath);
    }
    dispatch(unsetShowLangMenu());
  };
  return (
    <button
      onClick={onClickHandler}
      className="w-34.5 h-11 bg-BW-white hover:bg-BW-14 border border-BW-13 flex justify-between items-center gap-x-5 px-5 cursor-pointer"
    >
      <p className={`${language.font[lang]} text-16 text-BW-2`}>
        {language.title[lang]}
      </p>
      <img
        className="rounded-full overflow-hidden"
        src={`/images/header/language/${lang}.svg`}
        alt={`${lang} flag`}
      />
    </button>
  );
}

export default Language;
