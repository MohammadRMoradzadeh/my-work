"use client";
import { infoCircle } from "@/utils/icons";
import React from "react";

function Textarea({
  value,
  setValue,
  tittle = "",
  placeHolder = "",
  isEnLang = false,
  isInvalid = false,
}) {
  return (
    <>
      <div
        className={`bg-BG-400 md:bg-BG-600 rounded-lg md:rounded-2xl overflow-hidden w-full 
          min-h-full h-10 md:h-14 p-2  flex items-center gap-x-2 outline  has-[:focus]:outline-text-500 ${
            isEnLang ? "" : "flex-row-reverse"
          } ${isInvalid ? "outline-error " : "outline-transparent"} `}
      >
        {tittle && (
          <p
            dir={isEnLang ? "ltr" : "rtl"}
            className={`text-text-500 text-Pinar-ExtraBold text-xs md:text-base whitespace-nowrap overflow-hidden min-w-fit`}
          >
            {tittle}
          </p>
        )}

        <textarea
          dir={isEnLang ? "ltr" : "rtl"}
          type="textarea"
          value={value}
          placeholder={placeHolder}
          onChange={(e) => setValue(e.target.value)}
          className={`w-full h-full bg-transparent focus:outline-none text-text-500 text-Pinar-Medium md:text-Pinar-SemiBold md:text-base text-xs text-justify border-text-500 scrollbar-hide resize-none  ${
            tittle ? `${isEnLang ? " border-l pl-2" : " border-r pr-2"}` : ""
          }`}
        />

        {isInvalid ? (
          <>
            <div className="rounded-full hidden md:block" title="not valid">
              {infoCircle("#C30000", "36", "Outline")}
            </div>
            <div className="rounded-full md:hidden" title="not valid">
              {infoCircle("#C30000", "28", "Outline")}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Textarea;
