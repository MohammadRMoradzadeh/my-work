import SectionsTitle from "@/components/modules/home/SectionsTitle";
import ViewAll from "@/components/modules/home/ViewAll";
import { homeSections } from "@/utils/dataContainer/sectionsTitle/sectionsTitle";
import React from "react";
import BlogsSlider from "./blogsSlider/BlogsSlider";

function BlogsPreviewSection({ lang = language.fa }) {
  return (
    <div className="container mx-auto sm:px-4 mt-12.5 sm:mt-35 flex flex-col gap-y-4 sm:gap-y-8">
      <div className="w-full h-fit flex justify-between items-end px-4 sm:px-0">
        <SectionsTitle section={homeSections.blogs} lang={lang} />
        <ViewAll route={2} lang={lang} />
      </div>
      <BlogsSlider lang={lang} />
    </div>
  );
}

export default BlogsPreviewSection;
