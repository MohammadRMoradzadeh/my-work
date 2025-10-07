"use client";
import Input from "@/components/modules/input/Input";
import Textarea from "@/components/modules/input/Textarea";
import Swal from "sweetalert2";
import { closeSquare, documentUpload } from "@/utils/icons";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SectionTittle from "@/components/modules/sectionTittle/SectionTittle";

function AddProject({ isEnLang = false }) {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [fa_title, setFa_title] = useState("");
  const [fa_employer, setFa_employer] = useState("");
  const [fa_startDateYear, setFa_startDateYear] = useState("");
  const [fa_startDateMonth, setFa_startDateMonth] = useState("");
  const [fa_duration, setFa_duration] = useState("");
  const [fa_description, setFa_description] = useState("");
  const [en_title, setEn_title] = useState("");
  const [en_employer, setEn_employer] = useState("");
  const [en_startDateYear, setEn_startDateYear] = useState("");
  const [en_startDateMonth, setEn_startDateMonth] = useState("");
  const [en_duration, setEn_duration] = useState("");
  const [en_description, setEn_description] = useState("");
  const [images, setImages] = useState([]);

  const clearData = () => {
    setFa_title("");
    setFa_employer("");
    setFa_startDateYear("");
    setFa_startDateMonth("");
    setFa_duration("");
    setFa_description("");
    setEn_title("");
    setEn_employer("");
    setEn_startDateYear("");
    setEn_startDateMonth("");
    setEn_duration("");
    setEn_description("");
    setImages([]);
  };

  const sendHandler = async () => {
    setSending(true);
    if (
      fa_title &&
      fa_employer &&
      fa_startDateYear &&
      fa_startDateMonth &&
      fa_duration &&
      fa_description &&
      en_title &&
      en_employer &&
      en_startDateYear &&
      en_startDateMonth &&
      en_duration &&
      en_description
    ) {
      const formData = new FormData();
      formData.append("fa_title", fa_title);
      formData.append("fa_employer", fa_employer);
      formData.append("fa_startDateYear", fa_startDateYear);
      formData.append("fa_startDateMonth", fa_startDateMonth);
      formData.append("fa_duration", fa_duration);
      formData.append("fa_description", fa_description);
      formData.append("en_title", en_title);
      formData.append("en_employer", en_employer);
      formData.append("en_startDateYear", en_startDateYear);
      formData.append("en_startDateMonth", en_startDateMonth);
      formData.append("en_duration", en_duration);
      formData.append("en_description", en_description);
      images &&
        images.forEach((image) => {
          formData.append("images", image.file);
        });
      axios
        .post("/api/project", formData)
        .then((response) => {
          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: `${
              isEnLang ? response.data.message[0] : response.data.message[1]
            }`,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didClose: () => {
              setSending(false);
              clearData();
              isEnLang
                ? router.replace("/en/projects")
                : router.replace("/fa/projects");
            },
          });
        })
        .catch((error) => {
          console.log(" (add project post) error:", error);
          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title: `مشکلی پیش آمد !!`,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didClose: () => {
              setSending(false);
            },
          });
        });
    } else {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "warning",
        title: "لطفا تمامی فیلد ها را تکمیل کنید ",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    }
  };
  const removeImageHandler = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };
  const handleImageUpload = (event) => {
    const files = Object.values(event.target.files);
    if (files.length !== 0) {
      files.forEach((image) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImages((prev) => [
            ...prev,
            { file: image, preview: reader.result },
          ]);
        };
        reader.readAsDataURL(image);
      });
    }
  };

  return (
    <>
      <div className=" container mx-auto flex flex-col pt-10 items-center">
        <SectionTittle tittle={isEnLang ? "Add Project" : "افزودن پروژه"} />
        <div className="w-full md:w-[calc(100%-128px)] overflow-y-auto scrollbar-hide">
          <div className="w-full flex flex-col items-end px-8 ">
            <p className="text-text-500 text-Pinar-Bold text-lg lg:text-Pinar-SemiBold lg:text-2xl mb-3 lg:mb-6  mt-8 lg:mt-10  ">
              عنوان پروژه
            </p>
            <div
              dir="rtl"
              className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4"
            >
              <Input value={fa_title} setValue={setFa_title} tittle="فارسی" />
              <Input
                value={en_title}
                setValue={setEn_title}
                tittle="English"
                isEnLang
              />
            </div>
            <p className="text-text-500 text-Pinar-Bold text-lg lg:text-Pinar-SemiBold lg:text-2xl mb-3 lg:mb-6  mt-8 lg:mt-10  ">
              نام کارفرما
            </p>
            <div
              dir="rtl"
              className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4"
            >
              <Input
                value={fa_employer}
                setValue={setFa_employer}
                tittle="فارسی"
              />
              <Input
                value={en_employer}
                setValue={setEn_employer}
                tittle="English"
                isEnLang
              />
            </div>
            <p className="text-text-500 text-Pinar-Bold text-lg lg:text-Pinar-SemiBold lg:text-2xl mb-3 lg:mb-6  mt-8 lg:mt-10  ">
              تاریخ شروع پروژه
            </p>
            <div
              dir="rtl"
              className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-40 gap-y-4"
            >
              <div
                dir="rtl"
                className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4"
              >
                <Input
                  value={fa_startDateYear}
                  setValue={setFa_startDateYear}
                  tittle="سال"
                />
                <Input
                  value={fa_startDateMonth}
                  setValue={setFa_startDateMonth}
                  tittle="ماه"
                />
                <Input
                  value={fa_duration}
                  setValue={setFa_duration}
                  tittle="مدت زمان"
                />
              </div>
              <div
                dir="ltr"
                className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4"
              >
                <Input
                  value={en_startDateYear}
                  setValue={setEn_startDateYear}
                  tittle="Year"
                  isEnLang
                />
                <Input
                  value={en_startDateMonth}
                  setValue={setEn_startDateMonth}
                  tittle="Month"
                  isEnLang
                />
                <Input
                  value={en_duration}
                  setValue={setEn_duration}
                  tittle="Duration"
                  isEnLang
                />
              </div>
            </div>
            <p className="text-text-500 text-Pinar-Bold text-lg lg:text-Pinar-SemiBold lg:text-2xl mb-3 lg:mb-6  mt-8 lg:mt-10  ">
              توضیحات
            </p>
            <div
              dir="rtl"
              className="w-full h-40 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4"
            >
              <Textarea
                value={fa_description}
                setValue={setFa_description}
                placeHolder="به فارسی ..."
              />
              <Textarea
                value={en_description}
                setValue={setEn_description}
                placeHolder="English..."
                isEnLang
              />
            </div>
            <p className="text-text-500 text-Pinar-Bold text-lg lg:text-Pinar-SemiBold lg:text-2xl mb-3 lg:mb-6  mt-8 lg:mt-10  ">
              تصاویر پروژه
            </p>
            <div
              dir="rtl"
              className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4"
            >
              <label
                htmlFor="images-input"
                className="w-full aspect-video bg-BG-400 lg:bg-BG-600 rounded-lg lg:rounded-2xl overflow-hidden p-3 lg:p-5 cursor-pointer"
              >
                <div className="w-full h-full border-2 border-dashed border-text-500 rounded-lg lg:rounded-xl flex flex-col justify-center items-center gap-y-5 lg:gap-y-8">
                  <div className="lg:hidden">
                    {documentUpload("#14213d", "32", "Bold")}
                  </div>
                  <div className="hidden lg:block">
                    {documentUpload("#14213d", "68", "Bold")}
                  </div>
                  <p className="text-text-500 text-Pinar-SemiBold lg:text-Pinar-Bold text-sm lg:text-lg">
                    حداکثر حجم مورد قبول 25MB میباشد
                  </p>
                  <p className="text-text-500 text-Pinar-Medium text-xs lg:text-base">
                    (سایز پیشنهادی 600 * 400 پیکسل)
                  </p>
                </div>
                <input
                  type="file"
                  id="images-input"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              {images.length !== 0 && (
                <>
                  <div className="w-full aspect-video overflow-x-hidden overflow-y-auto grid grid-cols-4 gap-4 lg:gap-6 ">
                    {images.map((image, index) => (
                      <>
                        <div
                          key={index}
                          className="group w-full aspect-square rounded-lg overflow-hidden relative"
                        >
                          <img
                            src={image.preview}
                            alt=""
                            className="w-full aspect-square object-cover"
                          />

                          <div className="absolute w-full h-full rounded-lg top-0 right-0 bg-filter-black-30 z-10 hidden group-hover:flex transition backdrop-blur-sm justify-center items-center">
                            <div
                              onClick={() => removeImageHandler(index)}
                              className="cursor-pointer"
                            >
                              {closeSquare("#fff", "60", "Outline")}
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="w-full mt-6 mb-20 lg:mb-12 lg:mt-12">
              <div
                onClick={() => {
                  if (!sending) {
                    sendHandler();
                  }
                }}
                className="w-48 lg:w-64 h-12 lg:h-20 bg-primary-500 rounded-xl lg:rounded-2xl flex justify-center items-center mx-auto cursor-pointer"
              >
                {sending ? (
                  <div className="spinner"></div>
                ) : (
                  <p className="text-text-500 text-Pinar-Bold lg:text-Pinar-ExtraBold text-sm lg:text-xl">
                    ارسال اطلاعات
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProject;
