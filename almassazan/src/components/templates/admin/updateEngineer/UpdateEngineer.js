"use client";
import Input from "@/components/modules/input/Input";
import Textarea from "@/components/modules/input/Textarea";
import Swal from "sweetalert2";
import { closeSquare, profileCircle, trushSquare } from "@/utils/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SectionTittle from "@/components/modules/sectionTittle/SectionTittle";
import { fetchData } from "@/utils/tools";

function UpdateEngineer({ isEnLang = false, id = "#" }) {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [engineer, setEngineer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fa_fullName, setFa_fullName] = useState("");
  const [en_fullName, setEn_fullName] = useState("");
  const [fa_role, setFa_role] = useState("");
  const [en_role, setEn_role] = useState("");
  const [fa_evidence, setFa_evidence] = useState("");
  const [en_evidence, setEn_evidence] = useState("");
  const [fa_workRecord, setFa_workRecord] = useState("");
  const [en_workRecord, setEn_workRecord] = useState("");
  const [fa_workRecords, setFa_workRecords] = useState([]);
  const [en_workRecords, setEn_workRecords] = useState([]);
  const [email, setEmail] = useState("");
  const [image, setImage] = useState({ file: null, preview: null });
  const fetchEngineer = async () => {
    fetchData(`/api/engineer/${id}`, setEngineer, setLoading, setError);
  };
  useEffect(() => {
    fetchEngineer();
  }, []);
  useEffect(() => {
    if (engineer) {
      setFa_fullName(engineer.fa_fullName);
      setEn_fullName(engineer.en_fullName);
      setFa_role(engineer.fa_role);
      setEn_role(engineer.en_role);
      setFa_evidence(engineer.fa_evidence);
      setEn_evidence(engineer.en_evidence);
      setFa_workRecords(engineer.fa_workRecords);
      setEn_workRecords(engineer.en_workRecords);
      setEmail(engineer.email);
      setImage({ file: engineer.image, preview: engineer.image });
    }
  }, [engineer]);
  const clearData = () => {
    setFa_fullName("");
    setEn_fullName("");
    setFa_role("");
    setEn_role("");
    setFa_evidence("");
    setEn_evidence("");
    setFa_workRecord("");
    setEn_workRecord("");
    setFa_workRecords([]);
    setEn_workRecords([]);
    setEmail("");
    setImage({ file: null, preview: null });
  };
  const sendHandler = async () => {
    setSending(true);
    if (
      fa_fullName &&
      en_fullName &&
      fa_role &&
      en_role &&
      fa_evidence &&
      en_evidence &&
      fa_workRecords &&
      en_workRecords &&
      email
    ) {
      const formData = new FormData();
      formData.append("fa_fullName", fa_fullName);
      formData.append("en_fullName", en_fullName);
      formData.append("fa_role", fa_role);
      formData.append("en_role", en_role);
      formData.append("fa_evidence", fa_evidence);
      formData.append("en_evidence", en_evidence);
      fa_workRecords &&
        fa_workRecords.forEach((record) => {
          formData.append("fa_workRecords", record);
        });
      en_workRecords &&
        en_workRecords.forEach((record) => {
          formData.append("en_workRecords", record);
        });
      formData.append("email", email);
      if (image.file) {
        formData.append("image", image.file);
      }
      axios
        .put(`/api/engineer/${id}`, formData)
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
              router.replace(
                `/${isEnLang ? "en" : "fa"}/About-us/engineer?id=${id}`
              );
            },
          });
        })
        .catch((error) => {
          console.log(" (update engineer PUT) error:", error);
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
  const addWorkRecordHandler = () => {
    if ((fa_workRecord, en_workRecord)) {
      setFa_workRecords((prev) => {
        return [...prev, fa_workRecord];
      });
      setEn_workRecords((prev) => {
        return [...prev, en_workRecord];
      });
      setFa_workRecord("");
      setEn_workRecord("");
    }
  };
  const removeWorkRecordHandler = (index) => {
    setFa_workRecords((prev) => {
      return prev.filter((_, i) => i !== index);
    });
    setEn_workRecords((prev) => {
      return prev.filter((_, i) => i !== index);
    });
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage({ file, preview: reader.result });
      };
      reader.readAsDataURL(file);
    }
    event.target.value = null;
  };
  const clearImageInput = () => {
    setImage({ file: null, preview: null });
  };

  return (
    <>
      {engineer ? (
        <div className=" container mx-auto flex flex-col pt-8 gap-y-12 items-center">
          <SectionTittle
            tittle={isEnLang ? "Engineer Update" : "ویرایش مهندس"}
          />
          <div className="w-full md:w-[calc(100%-128px)] overflow-y-auto scrollbar-hide">
            <div className="w-full flex flex-col items-end px-8">
              <div className="w-full flex flex-col justify-center items-center">
                <div className=" flex justify-center items-center p-2 rounded-full bg-BG-400 lg:bg-BG-600">
                  <div className="w-40 aspect-square rounded-full border-2 border-dashed border-text-500 flex justify-center items-center overflow-hidden relative group">
                    {image.preview ? (
                      <>
                        <img
                          className="w-full aspect-square rounded-full object-cover"
                          src={image.preview}
                        />
                        <div className="absolute w-full h-full rounded-full top-0 right-0 bg-filter-black-30 z-10 hidden group-hover:flex transition backdrop-blur-sm justify-center items-center">
                          <div
                            onClick={clearImageInput}
                            className="cursor-pointer"
                          >
                            {closeSquare("#fff", "60", "Outline")}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>{profileCircle("#14213d", "60", "Outline")}</div>
                      </>
                    )}
                  </div>
                </div>
                <label
                  htmlFor="image-input"
                  className="px-8 py-3 bg-primary-500 cursor-pointer rounded-2xl mt-4 lg:mt-9 shadow-2xl"
                >
                  <p className="text-text-500 text-Pinar-Medium text-xs lg:text-xl">
                    انتخاب تصویر
                  </p>
                  <input
                    className="hidden"
                    id="image-input"
                    type="file"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>

              <p className="text-text-500 text-Pinar-Bold text-lg lg:text-Pinar-SemiBold lg:text-2xl mb-3 lg:mb-6  mt-8 lg:mt-10  ">
                نام و نام خانوادگی
              </p>
              <div
                dir="rtl"
                className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4"
              >
                <Input
                  value={fa_fullName}
                  setValue={setFa_fullName}
                  tittle="فارسی"
                />
                <Input
                  value={en_fullName}
                  setValue={setEn_fullName}
                  tittle="English"
                  isEnLang
                />
              </div>
              <p className="text-text-500 text-Pinar-Bold text-lg lg:text-Pinar-SemiBold lg:text-2xl mb-3 lg:mb-6  mt-8 lg:mt-10  ">
                سمت
              </p>
              <div
                dir="rtl"
                className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4"
              >
                <Input value={fa_role} setValue={setFa_role} tittle="فارسی" />
                <Input
                  value={en_role}
                  setValue={setEn_role}
                  tittle="English"
                  isEnLang
                />
              </div>
              <p className="text-text-500 text-Pinar-Bold text-lg lg:text-Pinar-SemiBold lg:text-2xl mb-3 lg:mb-6  mt-8 lg:mt-10  ">
                ایمیل
              </p>
              <div
                dir="rtl"
                className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4"
              >
                <Input value={email} setValue={setEmail} tittle="ایمیل" />
              </div>
              <p className="text-text-500 text-Pinar-Bold text-lg lg:text-Pinar-SemiBold lg:text-2xl mb-3 lg:mb-6  mt-8 lg:mt-10  ">
                مدرک حرفه ای
              </p>
              <div
                dir="rtl"
                className="w-full h-40 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4"
              >
                <Textarea
                  value={fa_evidence}
                  setValue={setFa_evidence}
                  placeHolder="به فارسی ..."
                />
                <Textarea
                  value={en_evidence}
                  setValue={setEn_evidence}
                  placeHolder="English..."
                  isEnLang
                />
              </div>
              <div className="mb-3 lg:mb-6  mt-8 lg:mt-10  flex items-center gap-x-4">
                <div
                  onClick={() => {
                    addWorkRecordHandler();
                  }}
                  className="bg-text-500  rounded-lg px-3 py-2 cursor-pointer"
                >
                  <p className="text-primary-500 text-Pinar-Medium text-xs">
                    افزودن آیتم جدید
                  </p>
                </div>
                <p className="text-text-500 text-Pinar-Bold text-lg lg:text-Pinar-SemiBold lg:text-2xl  ">
                  سوابق حرفه ای
                </p>
              </div>
              <div
                dir="rtl"
                className=" mb-8 w-full h-40 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4"
              >
                <Textarea
                  value={fa_workRecord}
                  setValue={setFa_workRecord}
                  placeHolder="به فارسی ..."
                />
                <Textarea
                  value={en_workRecord}
                  setValue={setEn_workRecord}
                  placeHolder="English..."
                  isEnLang
                />
              </div>

              <ul
                className="w-full p-4 empty:hidden border-2 border-text-500 rounded-lg flex flex-col gap-y-4"
                dir="rtl"
              >
                {fa_workRecords?.map((item, index) => {
                  return (
                    <li className="w-full  border-2 border-text-500 rounded-lg overflow-hidden flex items-center bg-transparent px-3 gap-x-3 bg-BG-600">
                      <div className="w-full h-full flex flex-col gap-y-px">
                        <div className="w-full h-1/2 border-b border-BG-500 flex items-center">
                          <p className="w-full p-1 text-ellipsis text-nowrap text-text-500 text-Pinar-Medium lg:text-Pinar-SemiBold lg:text-base text-xs overflow-hidden">
                            فارسی: {item}
                          </p>
                        </div>
                        <div className="w-full h-1/2 border-t border-BG-500 flex items-center">
                          <p className="w-full p-1 text-ellipsis text-nowrap text-text-500 text-Pinar-Medium lg:text-Pinar-SemiBold lg:text-base text-xs overflow-hidden">
                            انگلیسی : {en_workRecords[index]}
                          </p>
                        </div>
                      </div>
                      <div
                        className="cursor-pointer group"
                        onClick={() => {
                          removeWorkRecordHandler(index);
                        }}
                      >
                        <div className="group-hover:hidden">
                          {trushSquare("#14213d", "32")}
                        </div>
                        <div className=" hidden group-hover:block">
                          {trushSquare("#14213d", "32", "Bold")}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

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
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
}

export default UpdateEngineer;
