import SectionTittle from "@/components/modules/sectionTittle/SectionTittle";

function EnFooterSection() {
  return (
    <div className={`w-full flex flex-col  items-center pt-10 pb-20`}>
      <SectionTittle tittle="company's information" />

      <div className={`flex flex-col lg:flex-row px-10 lg:px-0`}>
        <div
          className={` pl-5 lg:pl-0 w-full lg:w-1/3 flex flex-col justify-center gap-y-4 border-b-2 border-text-200 lg:border-none py-7`}
        >
          <p
            className={`text-Roboto-Medium text-text-500 text-base lg:text-xl`}
          >
            Company name: Almas Sazan
          </p>
          <p
            className={`text-Roboto-Medium text-text-500 text-base lg:text-xl`}
          >
            Company type: Private equity
          </p>
          <p
            className={`text-Roboto-Medium text-text-500 text-base lg:text-xl`}
          >
            Instagram: almas.sazan1
          </p>
        </div>
        <div
          className={` pl-5 lg:pl-0  w-full lg:w-1/3 flex flex-col justify-center gap-y-4  border-b-2 border-text-200 lg:border-none py-7`}
        >
          <p
            className={`text-Roboto-Medium text-text-500 text-base lg:text-xl`}
          >
            Contact phone:<span>05137669443</span>{" "}
          </p>
          <p
            className={`text-Roboto-Medium text-text-500 text-base lg:text-xl`}
          >
            CEO: <span>09153598480</span>
          </p>
          <p
            className={`text-Roboto-Medium text-text-500 text-base lg:text-xl`}
          >
            Business manager:<span>09155072127</span>
          </p>
          <p
            className={`text-Roboto-Medium text-text-500 text-base lg:text-xl`}
          >
            Technical manager:<span>09153046283</span>
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
            className={`text-Roboto-Medium text-text-500 text-base lg:text-xl`}
          >
            Address: Mashhad, Chech Chi St., between 28 and 30 Chech Chi St.,
            second lot
          </p>
        </div>
      </div>
    </div>
  );
}

export default EnFooterSection;
