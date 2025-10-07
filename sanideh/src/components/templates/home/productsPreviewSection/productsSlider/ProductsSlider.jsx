"use client";
import ProductCard from "@/components/templates/products/productCard/ProductCard";
import { language } from "@/utils/dataContainer/language/language";
import { products } from "@/utils/dataContainer/productCard/productCard";
import React, { useRef } from "react";
import { getIcon } from "@/utils/icon/getIcon";

function ProductsSlider({ lang = language.fa }) {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (!containerRef.current) return;
    const firstCard = containerRef.current.querySelector("div");
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = 16;
    const scrollAmount = cardWidth + gap;

    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="w-full h-fit mt-4 sm:mt-10 relative ">
        <div
          ref={containerRef}
          className="w-full flex items-center gap-x-4 h-fit py-1 px-4 sm:px-0 sm:rounded-4xl overflow-x-auto scroll-smooth scrollbar-hidden"
        >
          {products.map(({ id, title, description, img }, index) => {
            return (
              <ProductCard
                key={index}
                notResponsive
                lang={lang}
                id={id}
                title={title[lang]}
                description={description[lang]}
                img={img}
              />
            );
          })}
        </div>
        <div className="hidden sm:block absolute top-0 rtl:left-0 ltr:right-0 h-full w-8 rtl:bg-gradient-to-r ltr:bg-gradient-to-l from-background to-transparent"></div>
        <div className="hidden absolute top-0 left-0 w-full h-full sm:flex ltr:flex-row-reverse justify-between items-center">
          <button
            onClick={() => scroll("left")}
            className="translate-x-16 cursor-pointer"
          >
            {getIcon({
              name: "ArrowSquareRight",
              size: "32",
              variant: "Bold",
              className: "text-Secondary",
            })}
          </button>
          <button
            onClick={() => scroll("right")}
            className="-translate-x-16 cursor-pointer"
          >
            {getIcon({
              name: "ArrowSquareLeft",
              size: "32",
              variant: "Bold",
              className: "text-Secondary",
            })}
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductsSlider;
