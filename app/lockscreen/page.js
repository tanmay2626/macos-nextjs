"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const Lock = (props) => {
  const [username, setUsername] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const router = useRouter();

  const calcDate = () => {
    const currentDate = new Date();

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const monthsOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = currentDate.getDate();
    const dayName = daysOfWeek[currentDate.getDay()];
    const month = monthsOfYear[currentDate.getMonth()];

    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedDate = `${dayName}, ${date} ${month}`;
    const formattedTime = `${hours} : ${
      minutes < 10 ? "0" + minutes : minutes
    }`;

    setDate(formattedDate);
    setTime(formattedTime);
  };

  const handleInput = (e) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    const timeInterval = setInterval(calcDate, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  useEffect(() => {
    const handleEnter = (e) => {
      if (e.key == "Enter") {
        localStorage.setItem("username", username);
        router.push("/home");
      }
    };

    window.addEventListener("keypress", handleEnter);

    return () => {
      window.removeEventListener("keypress", handleEnter);
    };
  }, [username]);

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) {
      setUsername(user);
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.dateComp}>
        <h1 className={styles.currDate}>{date}</h1>
        <h1 className={styles.currTime}>{time}</h1>
      </div>

      <Image
        className={styles.lockBg}
        alt="wallpaper"
        src="/wallpaper7.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className={styles.auth}>
        <Image src={"/guest.png"} width={70} height={60} priority alt="logo" />
        <h4>{username ? username : "New User"}</h4>
        <div className={styles.authCredentials}>
          <div className={styles.authName}>
            <input
              name="text"
              type="text"
              placeholder="Enter Name"
              onChange={handleInput}
            />
          </div>
        </div>
        <p className={styles.message}>
          {username
            ? "Update Name or Press Enter"
            : "Touch ID or Enter Password"}
        </p>
      </div>
    </main>
  );
};

export default Lock;
