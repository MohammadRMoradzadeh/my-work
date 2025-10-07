import DesktopNavbar from "@/components/modules/navbar/desktopNavbar/DesktopNavbar";
import MobileNavbar from "@/components/modules/navbar/mobileNavbar/MobileNavbar";
import { Toaster } from "react-hot-toast";
export default async function Layout({ children }) {
  return (
    <html lang="fa">
      <body className="md:bg-BG-500 ">
        <>
          <Toaster position="top-right" reverseOrder={false} />
          <MobileNavbar />
          <div
            className="w-16 h-screen fixed
            top-0
            sm:right-[calc((100vw-640px)/2)]
            md:right-[calc((100vw-768px)/2)] 
            lg:right-[calc((100vw-1024px)/2)] 
            xl:right-[calc((100vw-1280px)/2)] 
            2xl:right-[calc((100vw-1536px)/2)] 
            z-10 hidden md:flex items-center justify-center  "
          >
            <DesktopNavbar />
          </div>

          {children}
        </>
      </body>
    </html>
  );
}
export const metadata = {
  title: "شرکت الماس سازان",
  description: "شرکت الماس سازان",
};
