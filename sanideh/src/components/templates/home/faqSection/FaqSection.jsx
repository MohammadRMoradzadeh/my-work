"use client";
import Question from "@/components/modules/home/faqSection/question/Question";
import SidePicture from "@/components/modules/home/faqSection/sidePicture/SidePicture";
import { FAQs } from "@/utils/dataContainer/FAQ/FAQ";

import { language } from "@/utils/dataContainer/language/language";
import React, { useState } from "react";

function FaqSection({ lang = language.fa }) {
  const [questionSelected, setQuestionSelected] = useState(0);
  return (
    <div className="container px-4 pt-14 sm:pt-20 h-fit mx-auto mb-22.5 sm:mb-35 flex flex-col sm:flex-row sm:ltr:flex-row-reverse sm:justify-between items-center gap-y-8">
      <SidePicture lang={lang} />
      <div className="w-full h-full sm:w-6/12 flex flex-col gap-y-3">
        {FAQs.map((item, index) => {
          return (
            <Question
              key={index}
              lang={lang}
              question={item[lang].question}
              answer={item[lang].answer}
              setQuestionSelected={setQuestionSelected}
              questionSelected={questionSelected}
              index={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FaqSection;
