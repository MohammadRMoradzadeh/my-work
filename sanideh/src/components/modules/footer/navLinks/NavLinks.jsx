import { navLinks } from "@/utils/dataContainer/footer/Footer";
import { language } from "@/utils/dataContainer/language/language";
import Link from "next/link";
import React from "react";

function NavLinks({ lang = language.fa }) {
  const font = language.font[lang];
  return (
    <ul className="flex flex-col gap-y-2 mt-9">
      {navLinks.map(({ href, title }) => {
        return (
          <li key={href}>
            <Link href={`/${lang}${href}`}>
              <p
                className={`${font} text-12 sm:text-16 font-medium text-BW-white`}
              >
                {title[lang]}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
