"use client";
import { sms, eye, eyeSlash, refresh } from "@/utils/icons";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
function Login({ isEnLang = false }) {
  const router = useRouter();
  const handleLogin = async () => {
    router.replace("/");
  };
  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const data = { identifier, password };
  const makeCaptcha = (length) => {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  };
  const refreshCaptcha = () => {
    const text = makeCaptcha(4);
    setCaptcha(text);
  };
  const sendForm = () => {
    if (identifier === "" || password === "" || captchaInput === "") {
      Swal.fire({
        title: "!لطفا تمامی فیلد ها را تکمیل کنید ",
        icon: "warning",
        confirmButtonText: "باشه",
        customClass: {
          confirmButton: "my-confirm-button",
        },
      });
      return false;
    }
    if (captcha !== captchaInput) {
      toast.error("کد کپچا هم خوانی ندارد !", {
        duration: 4000,
        style: {
          direction: "rtl",
          background: "#ff4d6d",
          color: "white",
        },
      });
      setCaptchaInput("");
      refreshCaptcha();
      return false;
    }
    axios
      .post("/api/auth/login", { identifier, password })
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
            handleLogin();
          },
        });
      })
      .catch((err) => {
        if (err.status < 500) {
          Swal.fire({
            title: `${
              isEnLang
                ? err.response.data.message[0]
                : err.response.data.message[1]
            }`,
            icon: "warning",
            customClass: {
              confirmButton: "my-confirm-button",
            },
          });
        }
      });

    refreshCaptcha();
  };
  useEffect(() => {
    refreshCaptcha();
  }, []);
  return (
    <div
      className={`w-full h-screen bg-text-500 flex  justify-center items-center p-6 absolute z-30`}
    >
      <div
        className={`w-full max-w-96 flex flex-col justify-center items-center`}
      >
        <p className={`text-white text-Pinar-Bold text-lg mb-9`}>
          .<span className={`text-primary-500`}>وارد</span> حساب کاربری خود شوید
        </p>

        <div
          className={`w-full h-14  bg-other1 flex flex-row-reverse justify-center items-center gap-x-3 has-[:focus]:border-2 border-primary-500 has-[]:border-green-600 rounded-xl px-2 py-4 mb-4`}
        >
          <p
            className={`min-w-fit text-Pinar-Medium text-white opacity-80 text-xs `}
          >
            نام کاربری
          </p>
          <div className={`w-0.5 h-8 bg-white opacity-60 `} />
          <input
            dir="rtl"
            type="text"
            className={` w-full bg-transparent focus:outline-none peer text-Pinar-SemiBold text-white text-base `}
            maxLength={16}
            value={identifier}
            onChange={(e) => {
              setIdentifier(e.target.value);
            }}
          />
          <div>{sms("#fff")}</div>
        </div>

        <div
          className={`w-full h-14  bg-other1 flex flex-row-reverse justify-center items-center gap-x-3 has-[:focus]:border-2 border-primary-500 has-[]:border-green-600 rounded-xl px-2 py-4 mb-4`}
        >
          <p
            className={`min-w-fit px-1 text-Pinar-Medium text-white opacity-80 text-xs `}
          >
            رمز عبور
          </p>
          <div className={`w-0.5 h-8 bg-white opacity-60 `} />
          <input
            dir="rtl"
            type={showPassword ? "text" : "password"}
            className={` w-full bg-transparent focus:outline-none peer text-Pinar-SemiBold text-white text-base `}
            maxLength={30}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? eye("#fff") : eyeSlash("#fff")}
          </div>
        </div>
        <div
          className={`w-full flex flex-row-reverse justify-between sm:justify-start gap-5`}
        >
          <div
            className={`w-fit h-14  bg-other1 flex flex-row-reverse justify-center items-center gap-x-3 has-[:focus]:border-2 border-primary-500 rounded-xl px-2 py-4 mb-4`}
          >
            <p
              className={`min-w-fit text-Pinar-Medium text-white opacity-80 text-xs `}
            >
              کد مقابل را وارد کنید
            </p>
            <div className={`w-0.5 h-8 bg-white opacity-60 `} />
            <input
              dir="rtl"
              type="text"
              className={`w-20 bg-transparent focus:outline-none peer text-Pinar-SemiBold text-white text-base `}
              maxLength={4}
              value={captchaInput}
              onChange={(e) => {
                setCaptchaInput(e.target.value);
              }}
            />
          </div>
          <div
            className={`h-14 flex flex-col justify-center gap-2 sm:flex-row-reverse sm:items-center  `}
          >
            <img
              className="h-6 w-24 object-fill"
              src={`https://api.codebazan.ir/captcha/?font=1&bg=1&textcolor=1&text=${captcha}`}
              alt=""
            />
            <div
              onClick={() => {
                refreshCaptcha();
              }}
            >
              {refresh("#fff", "16", "Outline")}
            </div>
          </div>
        </div>
        <button
          className={`w-36 h-11 bg-primary-500 mt-10 rounded-xl flex justify-center items-center `}
          onClick={() => {
            sendForm();
          }}
        >
          <p className={`text-text-500 text-Pinar-Bold text-xl`}>ورود</p>
        </button>
      </div>
    </div>
  );
}

export default Login;
