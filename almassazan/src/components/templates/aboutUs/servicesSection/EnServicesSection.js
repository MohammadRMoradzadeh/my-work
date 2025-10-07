import SectionTittle from "@/components/modules/sectionTittle/SectionTittle";

function EnServicesSection() {
  return (
    <div className="flex flex-col items-center pt-7 lg:pt-16 ">
      <SectionTittle tittle="Services of Almas Sazan" />
      <img
        src="/images/ServicesSection/EnServices.svg"
        alt=""
        className="hidden lg:block mt-8"
      />
      <img
        src="/images/ServicesSection/EnServicesMobile.svg"
        alt=""
        className="lg:hidden mt-7"
      />
    </div>
  );
}

export default EnServicesSection;
