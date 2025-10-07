import "./globals.css";
import Providers from "./redux/Providers";
export default async function RootLayout({ children }) {
  return <Providers>{children}</Providers>;
}
