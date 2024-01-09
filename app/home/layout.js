"use client";

import Navigation from "../components/Navigation";
import localFont from "next/font/local";
import styles from "./page.module.css";
import Image from "next/image";

const myFont = localFont({ src: "../../apple-sfpro.woff" });

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <div>
          <Image
            className={styles.homeBg}
            alt="wallpaper"
            src="/wallpaper7.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
