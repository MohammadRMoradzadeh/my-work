import SectionTittle from "@/components/modules/sectionTittle/SectionTittle";

function FaServicesSection() {
  return (
    <div className="flex flex-col items-center pt-7 lg:pt-16">
      <SectionTittle tittle="خدمات الماس سازان" />
      <img
        src="/images/ServicesSection/FaServices.svg"
        alt=""
        className="hidden lg:block mt-8"
      />
      <img
        src="/images/ServicesSection/FaServicesMobile.svg"
        alt=""
        className="mt-7 lg:hidden"
      />
    </div>
  );
}

export default FaServicesSection;
