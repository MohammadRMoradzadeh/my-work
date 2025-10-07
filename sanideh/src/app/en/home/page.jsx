import AboutUsSection from "@/components/templates/home/aboutUsSection/AboutUsSection";
import FaqSection from "@/components/templates/home/faqSection/FaqSection";
import Header from "@/components/templates/header/Header";
import HeroSection from "@/components/templates/home/heroSection/HeroSection";
import { language } from "@/utils/dataContainer/language/language";
import React from "react";
import RequestConsultationSection from "@/components/templates/home/requestConsultationSection/RequestConsultationSection";
import ProductsPreviewSection from "@/components/templates/home/productsPreviewSection/ProductsPreviewSection";
import BlogsPreviewSection from "@/components/templates/home/blogsPreviewSection/BlogsPreviewSection";
function page() {
  return (
    <>
      <Header lang={language.en} />
      <HeroSection lang={language.en} />
      <AboutUsSection lang={language.en} />
      <ProductsPreviewSection lang={language.en} />
      <BlogsPreviewSection lang={language.en} />
      <RequestConsultationSection lang={language.en} />
      <FaqSection lang={language.en} />
    </>
  );
}

export default page;
