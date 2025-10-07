import { Contact_Us } from "@/utils/dataContainer/footer/Footer";
import { language } from "@/utils/dataContainer/language/language";
import { getIcon } from "@/utils/icon/getIcon";
import Link from "next/link";
import React from "react";

function ContactUs({ lang = language.fa }) {
  const font = language.font[lang];
  return (
    <div className="flex flex-col gap-y-4 sm:gap-y-10 mt-9">
      <p
        className={`${font} ${
          lang === language.fa ? "font-bold" : "font-medium"
        } text-14 sm:text-24 text-BW-white `}
      >
        {Contact_Us.title[lang]}
      </p>
      <ul className="flex flex-col gap-y-4.5">
        {Contact_Us.items.map(({ href, title, icon }, index) => {
          return (
            <li key={index}>
              <Link href={href} className="flex  items-center gap-x-4">
                <div className="size-8 flex justify-center items-center bg-gradient-to-br from-Secondary to-gradient-gold2 rounded-lg">
                  {getIcon({
                    name: icon,
                    size: "1.25rem",
                    color: "#1D1D1D",
                    weight: "fill",
                  })}
                </div>
                <p
                  className={`${font} text-10 sm:text-16 font-medium text-BW-white`}
                >
                  {title[lang]}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactUs;
