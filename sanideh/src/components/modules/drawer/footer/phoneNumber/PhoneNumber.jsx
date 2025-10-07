import { language } from "@/utils/dataContainer/language/language";
import { Phone } from "@phosphor-icons/react/dist/ssr";
import React from "react";

function PhoneNumber({
  lang = language.fa,
  phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "021-000000",
}) {
  
  return (
    <a
      href={`tel:${phoneNumber}`}
      aria-label={`تماس با ${phoneNumber}`}
      className="flex items-center gap-x-2"
    >
      <p
        className={`${language.font[lang]} ${
          lang === language.fa ? "font-semibold text-14" : "font-medium text-14"
        } text-BW-2`}
      >
        {phoneNumber}
      </p>
      <Phone size={"0.875rem"} color="#D0A767" weight="fill" />
    </a>
  );
}

export default PhoneNumber;
