import { request_Consultation } from "@/utils/dataContainer/heroSection/heroSection";
import { language } from "@/utils/dataContainer/language/language";
import Link from "next/link";
import React from "react";

function RequestConsultationLink({ lang = language.fa }) {
  const font = language.font[lang];
  return (
    <Link
      href={`/${lang}${request_Consultation.href}`}
      className=" group h-12.5  px-8 flex justify-center items-center border-2 border-Secondary hover:bg-Secondary rounded-lg  transition"
    >
      <p
        className={`${font} font-semibold text-14 sm:text-20 text-BW-14 group-hover:text-BW-3 transition`}
      >
        {request_Consultation.title[lang]}
      </p>
    </Link>
  );
}

export default RequestConsultationLink;
