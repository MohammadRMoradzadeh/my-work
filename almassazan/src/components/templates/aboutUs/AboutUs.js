import EnServicesSection from "./servicesSection/EnServicesSection";
import FaServicesSection from "./servicesSection/FaServicesSection";
import EngineerSection from "./engineerSection/EngineerSection";
import EnFooterSection from "./footerSection/EnFooterSection";
import FaFooterSection from "./footerSection/FaFooterSection";

const AboutUs = ({ isEnLang = false, children }) => {
  return (
    <div className=" container mx-auto flex justify-center">
      <div className="w-full md:w-[calc(100%-128px)] overflow-y-auto scrollbar-hide">
        <div className="w-full flex flex-col items-center relative">
          {isEnLang ? (
            <>
              <EnServicesSection />
              <EngineerSection isEnLang />
              <EnFooterSection />
            </>
          ) : (
            <>
              <FaServicesSection />
              <EngineerSection />
              <FaFooterSection />
            </>
          )}

          {children}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
