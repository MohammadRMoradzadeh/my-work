"use client";
import { language } from "@/utils/dataContainer/language/language";
import {
  answer_default,
  question_default,
} from "@/utils/dataContainer/question/question";
import { getIcon } from "@/utils/icon/getIcon";
import React from "react";

function Question({
  lang = language.fa,
  question,
  answer,
  setQuestionSelected,
  questionSelected,
  index,
}) {
  const font = language.font[lang];
  const showDetails = questionSelected === index;
  return (
    <div className="w-full flex flex-col gap-y-2">
      <div
        onClick={() => {
          if (questionSelected === index) {
            setQuestionSelected(0);
          } else {
            setQuestionSelected(index);
          }
        }}
        className="w-full flex  justify-between items-center cursor-pointer"
      >
        <p
          className={`${
            showDetails ? "text-BW-2" : "text-BW-6"
          } ${font} font-semibold text-12 sm:text-16 `}
        >
          {question || question_default[lang]}
        </p>
        {getIcon({
          name: "CaretDown",
          size: "1.5rem",
          color: "#29574a",
          weight: "bold",
          className: ` transition-transform ${showDetails ? "rotate-180" : ""}`,
        })}
      </div>
      <p
        className={`${
          showDetails ? "" : "hidden"
        } ${font} text-12 sm:text-16 text-BW-4`}
      >
        {answer || answer_default[lang]}
      </p>
    </div>
  );
}

export default Question;
