"use client";
import { blogPreviewCard } from "@/utils/dataContainer/blogCard/blogCard";
import { language } from "@/utils/dataContainer/language/language";
import { getIcon } from "@/utils/icon/getIcon";
import Link from "next/link";
import React, { useState } from "react";

function BlogPreviewCard({
  lang = language.fa,
  id = "#",
  title,
  description,
  readTime,
  img,
}) {
  const fallback = "/images/global/placeholder-image.png";
  const [imgSrc, setImgSrc] = useState(img ? img : fallback);
  return (
    <div className="bg-primary min-w-78.75 sm:min-w-106.75 h-47.5 sm:h-59.75 rounded-xl sm:rounded-4xl flex items-center p-2.5 sm:p-3 rtl:gap-x-4 sm:rtl:gap-x-3 ltr:gap-x-1.5 sm:ltr:gap-x-3.5 ">
      <img
        src={imgSrc}
        alt=""
        onError={(e) => {
          if (imgSrc !== fallback) {
            setImgSrc(fallback);
          }
        }}
        className="w-31.25 h-42.75 sm:w-46.25 sm:h-53.75 rounded-lg sm:rounded-3xl sm:border-8 sm:border-Secondary object-cover object-center"
      />
      <div className="flex-1 h-full flex flex-col justify-between pe-1.5 sm:pe-3 pt-1 sm:pt-4">
        <div className="w-full flex flex-col gap-y-2 sm:gap-y-3">
          <p className="rtl:font-Pinar ltr:font-Roboto font-bold text-BW-white text-14 sm:text-20">
            {title}
          </p>
          <p className="rtl:font-Pinar ltr:font-Roboto font-medium text-BW-14 text-10 sm:text-12 rtl:line-clamp-5 ltr:line-clamp-6  sm:ltr:line-clamp-5 rtl:leading-5">
            {description}
          </p>
        </div>
        <div className="w-full flex justify-between items-center ">
          <div className="h-fit flex items-center gap-x-2">
            {getIcon({
              name: "Clock",
              size: "12",
              variant: "Bold",
              className: "text-Secondary sm:hidden",
            })}
            {getIcon({
              name: "Clock",
              size: "16",
              variant: "Bold",
              className: "text-Secondary hidden sm:block",
            })}
            <p className="rtl:font-Pinar ltr:font-Roboto font-medium text-Secondary text-12 ">
              {readTime}
            </p>
          </div>
          <Link href={`/${lang}/blogs/${id}`}>
            <p className="rtl:font-Pinar ltr:font-Roboto font-semibold text-Secondary rtl:text-12 ltr:text-16">
              {blogPreviewCard[lang]}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogPreviewCard;
