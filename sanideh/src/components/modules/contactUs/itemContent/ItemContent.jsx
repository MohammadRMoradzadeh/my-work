import { language } from "@/utils/dataContainer/language/language";
import { address } from "@/utils/dataContainer/mapPin/mapPin";
import Link from "next/link";
import React from "react";

function ItemContent({
  lang = language.fa,
  data = { title: "", content: "", link: "#" },
  className = "",
}) {
  return (
    <div className={`${className} flex flex-col ltr:sm:items-end`}>
      <p className="rtl:font-Pinar ltr:font-Roboto font-bold text-16 sm:text-24 text-primary">
        {data.title}
      </p>
      <Link href={data.link}>
        <p className="rtl:font-Pinar ltr:font-Roboto font-semibold text-14 sm:text-20 text-BW-5">
          {data.content}
        </p>
      </Link>
    </div>
  );
}

export default ItemContent;
