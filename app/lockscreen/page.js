import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Lock = (props) => {
  return (
    <div className={styles.main}>
      <Image
        className={styles.lockBg}
        alt="wallpaper"
        src="/wallpaper1.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className={styles.auth}>
        <Image
          src={"/guest.png"}
          width={200}
          height={170}
          priority
          alt="logo"
        />
        <h3>New User</h3>
        <div className={styles.authCredentials}>
          <div className={styles.authName}>
            <input type="text" placeholder="Enter Name" />
          </div>

          <div className={styles.authHelp}>
            <Image
              src={"/help.png"}
              width={30}
              height={30}
              priority
              alt="logo"
            />
          </div>
        </div>
        <p className={styles.message}>
          Your password is required <br /> to enable Touch ID
        </p>
      </div>
    </div>
  );
};

export default Lock;
