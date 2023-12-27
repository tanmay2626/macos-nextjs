"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Boot from "./components/Boot.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.block}>
        <Image
          src={"/Apple_logo_white.svg"}
          width={85}
          height={90}
          priority
          alt="logo"
        />
        <Boot />
      </div>
    </main>
  );
}
