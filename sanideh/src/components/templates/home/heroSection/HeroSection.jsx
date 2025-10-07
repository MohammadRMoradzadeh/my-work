import BoldText from "@/components/modules/home/heroSection/boldText/BoldText";
import NamePrefix from "@/components/modules/home/heroSection/namePrefix/NamePrefix";
import ProductsLink from "@/components/modules/home/heroSection/productsLink/ProductsLink";
import PureName from "@/components/modules/home/heroSection/pureName/PureName";
import RequestConsultationLink from "@/components/modules/home/heroSection/requestConsultationLink/RequestConsultationLink";
import SidePicture from "@/components/modules/home/heroSection/sidePicture/SidePicture";
import SolidText from "@/components/modules/home/heroSection/solidText/SolidText";
import React from "react";

function HeroSection({ lang = language.fa }) {
  return (
    <div className="w-dvw h-svh aspect-2/1 bg-[url('/images/heroSection/banner.png')] bg-cover bg-center">
      <div className="w-full h-full bg-BW-Black/75 backdrop-blur-xs">
        <div className="container mx-auto sm:flex ltr:flex-row-reverse h-full justify-between items-center  ">
          <div className="flex-1 h-full ltr:pt-6 sm:ltr:pt-12 rtl:pt-8  sm:rtl:pt-20 flex flex-col items-center gap-y-6 sm:gap-y-16">
            <div className="w-full flex flex-col sm:flex-col-reverse items-center gap-y-6 sm:gap-y-16">
              <div className="w-full flex flex-col items-center">
                <NamePrefix lang={lang} />
                <PureName lang={lang} />
              </div>
              <div className="w-full flex flex-col rtl:flex-col-reverse items-center gap-y-1">
                <SolidText lang={lang} />
                <BoldText lang={lang} />
              </div>
            </div>
            <div className="w-full flex flex-col items-center ltr:gap-y-4 gap-y-8">
              <SidePicture className={"sm:hidden"} />
              <div className="w-full flex ltr:flex-row-reverse justify-center items-center gap-x-2.5 sm:gap-x-5">
                <RequestConsultationLink lang={lang} />
                <ProductsLink lang={lang} />
              </div>
            </div>
          </div>
          <SidePicture className={"hidden sm:block"} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
