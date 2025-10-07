import SectionTittle from "@/components/modules/sectionTittle/SectionTittle";

function FaFooterSection() {
  return (
    <div className={`w-full flex flex-col  items-center pt-10 pb-20`}>
      <SectionTittle tittle="اطلاعات شرکت" />

      <div className={`flex flex-col lg:flex-row-reverse px-10 lg:px-0`}>
        <div
          className={` pr-5 lg:pr-0 w-full lg:w-1/3 flex flex-col justify-center items-end gap-y-4 border-b-2 border-text-200 lg:border-none py-7`}
        >
          <p className={`text-Pinar-Medium text-text-500 text-base lg:text-xl`}>
            نام شرکت: الماس سازان
          </p>
          <p className={`text-Pinar-Medium text-text-500 text-base lg:text-xl`}>
            نوع شرکت:سهامی خاص
          </p>
          <p className={`text-Pinar-Medium text-text-500 text-base lg:text-xl`}>
            اینستاگرام: almas.sazan1
          </p>
        </div>
        <div
          className={` pr-5 lg:pr-0  w-full lg:w-1/3 flex flex-col justify-center items-end gap-y-4  border-b-2 border-text-200 lg:border-none py-7`}
        >
          <p className={`text-Pinar-Medium text-text-500 text-base lg:text-xl`}>
            تلفن تماس :<span>05137669443</span>
          </p>
          <p className={`text-Pinar-Medium text-text-500 text-base lg:text-xl`}>
            مدیرعامل: <span>09153598480</span>
          </p>
          <p className={`text-Pinar-Medium text-text-500 text-base lg:text-xl`}>
            مدیر بازرگانی:<span>09155072127</span>
          </p>
          <p className={`text-Pinar-Medium text-text-500 text-base lg:text-xl`}>
            مدیر فنی :<span>09153046283</span>
          </p>
        </div>
        <div
          className={` w-full lg:w-1/3 flex flex-col justify-center gap-y-3 py-7`}
        >
          <iframe
            src={process.env.address}
            className={`w-full aspect-video rounded-2xl`}
          />
          <p
            className={`text-Pinar-Medium text-text-500 text-base lg:text-xl`}
            dir="rtl"
          >
            آدرس : مشهد ، خیابان طرح چی ، حد فاصل طرح چی 28 و 30 ، قطعه دوم
          </p>
        </div>
      </div>
    </div>
  );
}

export default FaFooterSection;
