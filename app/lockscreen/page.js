import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Lock = (props) => {
  return (
    <div style={{ backgroundColor: `url("../../wallpaper1.jpg")` }}>
      <Image
        className={styles.lockBg}
        alt="wallpaper"
        src="/wallpaper1.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <h1 className={styles.lockText}>Hello</h1>
    </div>
  );
};

export default Lock;
