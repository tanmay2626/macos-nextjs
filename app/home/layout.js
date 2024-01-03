"use client";

import Navigation from "../components/Navigation";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../apple-sfpro.woff" });

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <div>
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
