import SectionsTitle from "@/components/modules/home/SectionsTitle";
import ViewAll from "@/components/modules/home/ViewAll";
import { language } from "@/utils/dataContainer/language/language";
import { homeSections } from "@/utils/dataContainer/sectionsTitle/sectionsTitle";
import React from "react";
import ProductsSlider from "./productsSlider/ProductsSlider";

function ProductsPreviewSection({ lang = language.fa }) {
  return (
    <div className="container mx-auto sm:px-4 rtl:mt-12.5 sm:rtl:mt-21.5 ltr:mt-16.5 sm:ltr:mt-19 flex flex-col">
      <div className="w-full h-fit flex justify-between items-end px-4 sm:px-0">
        <SectionsTitle section={homeSections.products} lang={lang} />
        <ViewAll route={1} lang={lang} />
      </div>
      <ProductsSlider lang={lang} />
    </div>
  );
}

export default ProductsPreviewSection;
