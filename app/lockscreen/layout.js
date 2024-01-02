import Navigation from "../components/Navigation";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../apple-sfpro.woff" });

export default function LockLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
