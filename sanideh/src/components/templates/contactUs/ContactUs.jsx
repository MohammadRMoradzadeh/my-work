import ItemContent from "@/components/modules/contactUs/itemContent/ItemContent";
import MapPin from "@/components/modules/contactUs/mapPin/MapPin";
import Title from "@/components/modules/contactUs/title/Title";
import { contact_us } from "@/utils/dataContainer/contact-us/contact-us";
import { language } from "@/utils/dataContainer/language/language";
import React from "react";

function ContactUs({ lang = language.fa }) {
  const { phone, fax, address } = contact_us[lang];
  return (
    <div className="container mx-auto px-4 sm:px-0 flex flex-col">
      <Title lang={lang} />
      <div className="w-full flex flex-col rtl:sm:flex-row ltr:sm:flex-row-reverse justify-between items-center mt-20 sm:mt-11 sm:mb-18">
        <div className="w-full sm:w-auto flex flex-col gap-y-13">
          <div className="flex rtl:flex-row-reverse rtl:sm:flex-row ltr:sm:flex-row-reverse justify-between items-center sm:items-end px-10 ltr:sm:pl-35">
            <img
              src="/images/contactUs/itemsSidePicture/phone.svg"
              alt=""
              className="w-22.25 sm:w-32.25"
            />
            <ItemContent lang={lang} data={phone} />
          </div>
          <div className="flex ltr:flex-row-reverse rtl:sm:flex-row ltr:sm:flex-row-reverse justify-between items-center sm:items-end px-10 ltr:sm:pl-35">
            <img
              src="/images/contactUs/itemsSidePicture/fax.svg"
              alt=""
              className="w-25.5 sm:w-46.25"
            />
            <ItemContent lang={lang} data={fax} />
          </div>
          <div className="flex rtl:flex-row-reverse rtl:sm:flex-row ltr:sm:flex-row-reverse justify-between items-center sm:items-end rtl:ps-10 gap-x-2">
            <img
              src="/images/contactUs/itemsSidePicture/address.svg"
              alt=""
              className="w-39 sm:w-72 sm:-ml-36 "
            />
            <ItemContent lang={lang} data={address} className="mb-2" />
          </div>
        </div>
        <img
          src="/images/contactUs/sidePicture/sidePicture.svg"
          alt=""
          className="w-52 hidden sm:block"
        />
        <MapPin />
      </div>
    </div>
  );
}

export default ContactUs;
