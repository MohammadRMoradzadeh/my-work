import Footer from "@/components/templates/footer/Footer";
import PopUps from "@/components/templates/popUps/PopUps";
import { language } from "@/utils/dataContainer/language/language";

export default async function Layout({ children }) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <body className="w-dvw overflow-x-hidden relative bg-background select-none">
        {children}
        <Footer lang={language.en} />
        <PopUps lang={language.en} />
      </body>
    </html>
  );
}
export const metadata = {
  title: "sanideh",
  description: "sanideh company",
};
