import { language } from "@/utils/dataContainer/language/language";
import { navLinks } from "@/utils/dataContainer/navLinks/navLinks";
import { viewAll } from "@/utils/dataContainer/viewAll/viewAll";
import { getIcon } from "@/utils/icon/getIcon";
import Link from "next/link";
import React from "react";

function ViewAll({ lang = language.fa, route = 0 }) {
  return (
    <Link
      href={`/${lang}${navLinks[route].href}`}
      className="group flex items-center "
    >
      <p className="font-Pinar font-medium  text-BW-7 group-hover:text-BW-3 rtl:text-12 sm:rtl:text-20 ltr:text-14 sm:ltr:text-16 transition text-nowrap">
        {viewAll[lang]}
      </p>
      {getIcon({
        name: "ArrowLeft2",
        size: "12",
        className:
          "text-BW-7 group-hover:text-BW-3 sm:hidden ltr:rotate-180 transition",
      })}
      {getIcon({
        name: "ArrowLeft2",
        size: "24",
        className:
          "text-BW-7 group-hover:text-BW-3 hidden sm:block ltr:rotate-180 transition",
      })}
    </Link>
  );
}

export default ViewAll;
