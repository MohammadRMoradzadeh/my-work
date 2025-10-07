"use client";
import { closeSquare, link21 } from "@/utils/icons";
import React, { useRef } from "react";

function FileInput({
  value,
  setValue,
  tittle = "بارگذاری فایل",
  placeHolder = "فایل محاسبات را بارگذاری کنید",
  isEnLang = false,
}) {
  const fileInputRef = useRef(null);

  const changeHandler = (e) => {
    const pdf = /.*\.pdf/;
    const file = e.target.files[0]?.name;
    if (pdf.test(file)) {
      setValue([e.target.files[0]]);
    }
  };

  const clear = () => {
    setValue([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      <div
        className={` bg-BG-400 md:bg-BG-600 rounded-lg md:rounded-2xl overflow-hidden relative w-full h-10 md:h-14 p-1 flex items-center gap-x-2  ${
          isEnLang ? "flex-row-reverse" : ""
        }`}
      >
        <div
          className={` w-full h-full absolute top-0 left-0  flex ${
            isEnLang ? "flex-row-reverse" : ""
          } items-center justify-between p-1`}
        >
          <label htmlFor="file-input" className=" w-fit h-full cursor-pointer ">
            <div
              className={`px-4 md:px-10  h-full rounded-md md:rounded-xl flex justify-center items-center`}
            >
              <p
                className={`text-transparent text-Pinar-ExtraBold text-xs md:text-base whitespace-nowrap overflow-hidden min-w-fit`}
              >
                {tittle}
              </p>
            </div>
            <input
              type="file"
              id="file-input"
              ref={fileInputRef} // اضافه کردن رفرنس
              className="hidden"
              onChange={(e) => changeHandler(e)}
            />
          </label>
          <div
            onClick={clear}
            className={`md:p-2 cursor-pointer ${value?.name ? "" : "hidden"}`}
          >
            <div className="hidden md:block">
              {closeSquare("#353535", "32", "Outline")}
            </div>
            <div className="md:hidden">
              {closeSquare("#353535", "28", "Outline")}
            </div>
          </div>
        </div>
        {tittle && (
          <div
            className={`px-4 md:px-10 bg-text-500 h-full rounded-md md:rounded-xl flex justify-center items-center`}
          >
            <p
              className={`text-primary-500 text-Pinar-ExtraBold text-xs md:text-base whitespace-nowrap overflow-hidden min-w-fit`}
            >
              {tittle}
            </p>
          </div>
        )}

        <input
          dir={isEnLang ? "ltr" : "rtl"}
          type="text"
          value={value?.name ? value.name : ""}
          placeholder={placeHolder}
          className={` w-full h-full bg-transparent focus:outline-none text-text-500 text-Pinar-Medium md:text-Pinar-SemiBold md:text-base text-xs `}
        />
        <div className={`md:p-2`}>
          <div className={` w-8 h-8 ${value?.name ? "hidden" : ""}`}>
            <div className="hidden md:block">
              {link21("#353535", "32", "Outline")}
            </div>
            <div className="md:hidden">
              {link21("#353535", "28", "Outline")}
            </div>
          </div>
          <div className={` w-8 h-8 ${value?.name ? "" : "hidden"}`}></div>
        </div>
      </div>
    </>
  );
}

export default FileInput;
