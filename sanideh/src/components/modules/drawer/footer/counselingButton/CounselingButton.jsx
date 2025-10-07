"use client";
import { setPopUp } from "@/app/redux/slices/showPopUp";
import { counselingButton } from "@/utils/dataContainer/counselingButton/counselingButton";
import { language } from "@/utils/dataContainer/language/language";
import { popUp } from "@/utils/statesContainer/popUp/popUp";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

function CounselingButton({ lang = language.fa }) {
  const dispatch = useDispatch();
  const onclickHandler = () => {
    dispatch(setPopUp(popUp.none));
  };

  return (
    <Link
      onClick={onclickHandler}
      href={`/${lang}${counselingButton.href}`}
      className="w-full h-9 bg-Secondary hover:bg-Secondary-2 rounded-lg flex justify-center items-center"
    >
      <p className={`${language.font[lang]} font-semibold text-14 text-BW-3`}>
        {counselingButton.title[lang]}
      </p>
    </Link>
  );
}

export default CounselingButton;
