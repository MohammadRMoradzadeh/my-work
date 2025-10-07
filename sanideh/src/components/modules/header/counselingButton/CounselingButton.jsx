import { counselingButton } from "@/utils/dataContainer/counselingButton/counselingButton";
import { language } from "@/utils/dataContainer/language/language";
import Link from "next/link";
import React from "react";

function CounselingButton({ lang = language.fa }) {
  return (
    <Link
      href={`/${lang}${counselingButton.href}`}
      className="w-29 h-9 bg-Secondary hover:bg-Secondary-2 rounded-lg flex justify-center items-center"
    >
      <p className={`${language.font[lang]} font-semibold text-14 text-BW-3`}>
        {counselingButton.title[lang]}
      </p>
    </Link>
  );
}

export default CounselingButton;
