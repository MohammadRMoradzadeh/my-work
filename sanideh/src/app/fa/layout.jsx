import Footer from "@/components/templates/footer/Footer";
import PopUps from "@/components/templates/popUps/PopUps";
import { language } from "@/utils/dataContainer/language/language";

export default async function Layout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body className="w-dvw overflow-x-hidden relative bg-background select-none">
        {children}
        <Footer />
        <PopUps lang={language.fa} />
      </body>
    </html>
  );
}
export const metadata = {
  title: "سانیده",
  description: "شرکت سانیده",
};
