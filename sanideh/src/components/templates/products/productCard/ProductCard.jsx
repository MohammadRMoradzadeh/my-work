"use client";
import { language } from "@/utils/dataContainer/language/language";
import { productCard } from "@/utils/dataContainer/productCard/productCard";
import { getIcon } from "@/utils/icon/getIcon";
import Link from "next/link";
import React, { useState } from "react";

function ProductCard({
  lang = language.fa,
  notResponsive = false,
  id = "#",
  title,
  description,
  img,
}) {
  const responsive = !notResponsive;
  const fallback = "/images/global/placeholder-image.png";
  const [imgSrc, setImgSrc] = useState(img ? img : fallback);
  return (
    <div
      className={`min-w-67 h-87.75 bg-BW-white rounded-3xl overflow-hidden flex flex-col drop-shadow-sm ${
        responsive && "max-sm:min-w-44 max-sm:h-65.75 max-sm:rounded-lg"
      }`}
    >
      <img
        src={imgSrc}
        alt=""
        onError={(e) => {
          if (imgSrc !== fallback) {
            setImgSrc(fallback);
          }
        }}
        className={`w-full h-46.5 ${
          responsive && "max-sm:h-30.5"
        } object-cover object-center`}
      />
      <div
        className={`flex-1 flex flex-col justify-between px-5 py-4 ${
          responsive && "max-sm:px-2 max-sm:py-2"
        }`}
      >
        <div
          className={`w-full flex flex-col rtl:gap-y-2 ${
            responsive && "max-sm:rtl:gap-y-1"
          }`}
        >
          <p
            className={`rtl:font-Pinar ltr:font-Roboto font-bold text-text-100 rtl:text-14 ltr:text-16 ${
              responsive && "max-sm:rtl:text-12 max-sm:ltr:text-12"
            }`}
          >
            {title}
          </p>
          <p
            className={`rtl:font-Pinar ltr:font-Roboto font-semibold text-text-90 rtl:text-12 ltr:text-12 rtl:line-clamp-3 ltr:line-clamp-3 ${
              responsive &&
              "max-sm:rtl:text-8 max-sm:ltr:text-8 max-sm:rtl:text-justify max-sm:rtl:line-clamp-3 max-sm:ltr:line-clamp-5"
            }`}
          >
            {description}
          </p>
        </div>
        <Link
          href={`/${lang}/products/${id}`}
          className={`w-full h-8 rounded-3xl bg-primary hover:bg-Secondary transition flex justify-center items-center gap-x-2 ${
            responsive && "max-sm:rounded-lg"
          }`}
        >
          {getIcon({
            name: "Eye",
            size: "18",
            color: "#f0f0f0",
          })}
          <p
            className={`rtl:font-Pinar ltr:font-Roboto font-semibold rtl:text-14 ltr:text-16 text-BW-14 ${
              responsive && "max-sm:rtl:text-10 max-sm:ltr:text-12"
            }`}
          >
            {productCard[lang]}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
