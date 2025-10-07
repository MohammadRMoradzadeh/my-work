import Input from "@/components/modules/home/requestConsultationSection/input/Input";
import Textarea from "@/components/modules/home/requestConsultationSection/textarea/Textarea";
import SectionsTitle from "@/components/modules/home/SectionsTitle";
import { language } from "@/utils/dataContainer/language/language";
import { requestConsultationSection } from "@/utils/dataContainer/requestConsultationSection/requestConsultationSection";
import { homeSections } from "@/utils/dataContainer/sectionsTitle/sectionsTitle";
import React from "react";

function RequestConsultationSection({ lang = language.fa }) {
  return (
    <div
      id="RequestConsultation"
      className="w-full h-208 sm:h-183.75 bg-primary mt-10 sm:mt-30 "
    >
      <div className="h-full container mx-auto px-4 flex ">
        <div className="w-full sm:w-122.25 h-full flex flex-col pt-7 sm:pt-12.5">
          <SectionsTitle
            bgPrimary
            section={homeSections.RequestConsultation}
            lang={lang}
          />
          <p className="rtl:font-Pinar rtl:font-medium ltr:font-Roboto text-BW-13 rtl:text-10 ltr:text-14 sm:rtl:text-16 sm:ltr:text-16  mt-4.5 sm:mt-8">
            {requestConsultationSection.ctaText[lang]}
          </p>
          <form>
            <div className="w-full grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-x-4 rtl:gap-y-4 sm:rtl:gap-y-4  ltr:gap-y-4 sm:ltr:gap-y-3 rtl:mt-4.5 sm:rtl:mt-13 ltr:mt-5 sm:ltr:mt-7.5">
              <Input label={requestConsultationSection.inputs.name[lang]} />
              <Input
                label={requestConsultationSection.inputs.companyName[lang]}
              />
              <Input
                label={requestConsultationSection.inputs.phoneNumber[lang]}
              />
              <Input label={requestConsultationSection.inputs.email[lang]} />
            </div>
            <Textarea
              label={requestConsultationSection.inputs.description[lang]}
            />
            <button className="w-full h-12.5 bg-Secondary flex justify-center items-center rounded-lg rtl:mt-6 sm:rtl:mt-5 ltr:mt-5 sm:ltr:mt-6">
              <p className="text-BW-3 font-semibold rtl:font-Pinar ltr:font-Roboto rtl:text-16 sm:rtl:text-20 ltr:text-20 sm:text-20">
                {requestConsultationSection.submitButton[lang]}
              </p>
            </button>
          </form>
        </div>
        <img
          src="/images/requestConsultationSection/Consulting-cuate.svg"
          alt=""
          className="w-150 hidden sm:block"
        />
      </div>
    </div>
  );
}

export default RequestConsultationSection;
