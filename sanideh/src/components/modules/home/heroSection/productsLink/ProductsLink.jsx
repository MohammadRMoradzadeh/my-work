import { Products } from "@/utils/dataContainer/heroSection/heroSection";
import { language } from "@/utils/dataContainer/language/language";
import Link from "next/link";
import React from "react";

function ProductsLink({ lang = language.fa }) {
  const font = language.font[lang];

  return (
    <Link
      href={`/${lang}${Products.href}`}
      className="group h-12.5  px-8 flex justify-center items-center bg-Secondary hover:bg-Secondary-2 rounded-lg transition"
    >
      <p
        className={`${font} font-semibold text-14 sm:text-20 text-BW-3 group-hover:text-BW-14 transition`}
      >
        {Products.title[lang]}
      </p>
    </Link>
  );
}

export default ProductsLink;
