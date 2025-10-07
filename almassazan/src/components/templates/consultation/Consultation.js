"use client";
import FileInput from "@/components/modules/input/FileInput";
import Input from "@/components/modules/input/Input";
import Textarea from "@/components/modules/input/Textarea";
import SectionTittle from "@/components/modules/sectionTittle/SectionTittle";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Consultation({ isEnLang = false }) {
  const router = useRouter();

  const [sending, setSending] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [file, setFile] = useState([]);
  const [fileName, setFileName] = useState("");
  const [useOfTheStructure, setUseOfTheStructure] = useState("");
  const [floors, setFloors] = useState("");
  const [foundation, setFoundation] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (file) {
      setFileName(file[0]?.name ? file[0].name : "");
    } else {
      setFileName("");
    }
  }, [file]);
  const sendHandler = async () => {
    setSending(true);
    if (
      firstName &&
      lastName &&
      phone &&
      email &&
      length &&
      width &&
      useOfTheStructure &&
      floors &&
      foundation &&
      address &&
      description
    ) {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("length", length);
      formData.append("width", width);
      file && file[0] && formData.append("file", file[0]);
      formData.append("useOfTheStructure", useOfTheStructure);
      formData.append("floors", floors);
      formData.append("foundation", foundation);
      formData.append("address", address);
      formData.append("description", description);
      axios
        .post(`/api/ConsultationRequest/${isEnLang ? "en" : "fa"}`, formData)
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
              // clearData();
              setSending(false);
              router.replace(`${isEnLang ? "/en" : "/fa"}`);
            },
          });
        })
        .catch((error) => {
          console.log(" (consultation POST) Error:", error);
          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "Error",
            title: `${
              isEnLang ? "There was a problem !!" : "مشکلی پیش آمد !!"
            }`,
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
        title: `${
          isEnLang
            ? "Please complete all fields"
            : "لطفا تمامی فیلد ها را تکمیل کنید "
        }`,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    }
  };
  return (
    <div className=" container mx-auto flex justify-center">
      <div className="w-full md:w-[calc(100%-128px)] overflow-y-auto scrollbar-hide">
        <div className="w-full flex flex-col items-center">
          <div className="py-5 md:py-16">
            <SectionTittle tittle={isEnLang ? "collaboration" : "ثبت سفارش"} />
          </div>
          <div
            className={`w-full px-8 pb-16 grid grid-cols-1 md:grid-cols-2 gap-x-40 ${
              isEnLang ? "" : "dir-rtl"
            }`}
          >
            <div className={`w-full`}>
              <p
                className={`text-text-500 text-Pinar-Bold text-lg md:text-Pinar-SemiBold md:text-2xl mb-3 md:mb-6  mt-8 md:mt-10`}
              >
                {isEnLang ? "Personal Information" : "اطلاعات شخصی"}
              </p>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 ${
                  isEnLang ? "" : "dir-rtl"
                }`}
              >
                <Input
                  value={firstName}
                  setValue={setFirstName}
                  isEnLang={isEnLang}
                  tittle={isEnLang ? "first name" : "نام"}
                />
                <Input
                  value={lastName}
                  setValue={setLastName}
                  isEnLang={isEnLang}
                  tittle={isEnLang ? "last name" : "نام خانوادگی"}
                />
                <div className={`md:col-span-2`}>
                  <Input
                    value={phone}
                    setValue={setPhone}
                    isEnLang={isEnLang}
                    tittle={isEnLang ? "phone number" : "شماره تماس"}
                  />
                </div>
                <div className={`md:col-span-2`}>
                  <Input
                    value={email}
                    setValue={setEmail}
                    isEnLang={isEnLang}
                    tittle={isEnLang ? "email" : "ایمیل"}
                  />
                </div>
              </div>
              <p
                className={`text-text-500 text-Pinar-Bold text-lg md:text-Pinar-SemiBold md:text-2xl mb-3 md:mb-6 mt-8 md:mt-10`}
              >
                {isEnLang ? "Land dimensions" : "ابعاد زمین"}
              </p>
              <div
                className={`grid grid-cols-2 gap-4 md:gap-5 ${
                  isEnLang ? "" : "dir-rtl"
                }`}
              >
                <Input
                  value={width}
                  setValue={setWidth}
                  isEnLang={isEnLang}
                  tittle={isEnLang ? "width" : "عرض"}
                />
                <Input
                  value={length}
                  setValue={setLength}
                  isEnLang={isEnLang}
                  tittle={isEnLang ? "length" : "طول"}
                />
                <div className={`col-span-2`}>
                  <FileInput
                    value={file[0]}
                    setValue={setFile}
                    isEnLang={isEnLang}
                    tittle={isEnLang ? "choose file" : "انتخاب فایل"}
                    placeHolder={
                      fileName
                        ? fileName
                        : isEnLang
                        ? "Upload the file related to calculations"
                        : "فایل مربوط به محاسبات را بارگذاری نمایید "
                    }
                  />
                </div>
              </div>
            </div>
            <div className={`w-full`}>
              <p
                className={`text-text-500 text-Pinar-Bold text-lg md:text-Pinar-SemiBold md:text-2xl mb-3 md:mb-6 mt-8 md:mt-10`}
              >
                {isEnLang ? "Use of the structure" : "کاربری سازه"}
              </p>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 ${
                  isEnLang ? "" : "dir-rtl"
                }`}
              >
                <div className={`md:col-span-2`}>
                  <Input
                    value={useOfTheStructure}
                    setValue={setUseOfTheStructure}
                    isEnLang={isEnLang}
                    tittle={isEnLang ? "use of the structure" : "کاربری سازه"}
                  />
                </div>
                <Input
                  value={floors}
                  setValue={setFloors}
                  isEnLang={isEnLang}
                  tittle={isEnLang ? "number of floors" : "تعداد طبقات"}
                />
                <Input
                  value={foundation}
                  setValue={setFoundation}
                  isEnLang={isEnLang}
                  tittle={isEnLang ? "foundation" : "زیربنا"}
                />
                <div className={`md:col-span-2`}>
                  <Input
                    value={address}
                    setValue={setAddress}
                    isEnLang={isEnLang}
                    tittle={isEnLang ? "location" : "مکان"}
                  />
                </div>
              </div>
              <p
                className={`text-text-500 text-Pinar-Bold text-lg md:text-Pinar-SemiBold md:text-2xl mb-3 md:mb-6 mt-8 md:mt-10`}
              >
                {isEnLang ? "Description" : "توضیحات"}
              </p>
              <div className={`h-32 ${isEnLang ? "" : "dir-rtl"}`}>
                <Textarea
                  value={description}
                  setValue={setDescription}
                  isEnLang={isEnLang}
                  placeHolder={isEnLang ? "Description..." : "توضیحات..."}
                />
              </div>
            </div>
            <div className={`md:col-span-2 w-full mt-9 md:mt-24 mb-12`}>
              <div
                onClick={() => {
                  if (!sending) {
                    sendHandler();
                  }
                }}
                className={`w-48 md:w-64 h-12 md:h-20 bg-primary-500 rounded-xl md:rounded-2xl flex justify-center items-center mx-auto cursor-pointer`}
              >
                {sending ? (
                  <div className="spinner"></div>
                ) : (
                  <p
                    className={`text-text-500 text-Pinar-Bold md:text-Pinar-ExtraBold text-sm md:text-xl`}
                  >
                    {isEnLang ? "send information" : "ارسال اطلاعات"}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
