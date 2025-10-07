import AboutUs from "@/components/templates/aboutUs/AboutUs";

async function AboutUsLayout({ children }) {
  return (
    <>
      <div className="hidden md:block">
        <AboutUs isEnLang>{children}</AboutUs>;
      </div>
      <div className="md:hidden">{children}</div>
    </>
  );
}

export default AboutUsLayout;
