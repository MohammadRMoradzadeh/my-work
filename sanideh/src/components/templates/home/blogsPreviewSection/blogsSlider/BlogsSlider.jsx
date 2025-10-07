"use client";
import { language } from "@/utils/dataContainer/language/language";
import React, { useEffect, useRef, useState } from "react";
import BlogPreviewCard from "../blogPreviewCard/BlogPreviewCard";
import { blogs } from "@/utils/dataContainer/blogCard/blogCard";

function BlogsSlider({ lang = language.fa }) {
  const scrollRef = useRef(null);
  const [scrollData, setScrollData] = useState({
    scrollLeft: 0,
    scrollWidth: 0,
    clientWidth: 0,
  });

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateScrollData = () => {
      setScrollData({
        scrollLeft: el.scrollLeft,
        scrollWidth: el.scrollWidth,
        clientWidth: el.clientWidth,
      });
    };
    const handleWheel = (e) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("scroll", updateScrollData);
    updateScrollData();
    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("scroll", updateScrollData);
    };
  }, []);

  const { scrollLeft, scrollWidth, clientWidth } = scrollData;

  return (
    <div className="w-full flex flex-col items-center gap-y-8">
      <div
        ref={scrollRef}
        className=" w-full h-fit flex items-center flex-nowrap gap-x-1.5 sm:gap-x-5 overflow-x-auto scrollbar-hidden px-4 sm:px-0"
      >
        {blogs.map(({ id = "#", title, description, readTime, img }, index) => {
          return (
            <BlogPreviewCard
              id={id}
              title={title[lang]}
              description={description[lang]}
              readTime={readTime[lang]}
              img={img}
              key={index}
              lang={lang}
            />
          );
        })}
      </div>
      <div className="relative w-129.25 h-2 rounded-full bg-BW-13 overflow-hidden hidden sm:block">
        <div
          className="absolute top-0 start-0 h-full rounded-full bg-primary transition-all duration-200"
          style={{
            width: `${
              clientWidth && scrollWidth ? (clientWidth / scrollWidth) * 100 : 0
            }%`,
            transform: `translateX(${(scrollLeft / clientWidth) * 100}%)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default BlogsSlider;
