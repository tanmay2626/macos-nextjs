import Image from "next/image";
import React, { useState, useEffect } from "react";
import wifiImg from "../../public/wifi.png";
import batteryImg from "../../public/battery.png";
import searchImg from "../../public/search.png";
import switchImg from "../../public/switch.png";

const Navigation = (props) => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const calcDate = () => {
    const currentDate = new Date();

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const monthsOfYear = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const date = currentDate.getDate();
    const dayName = daysOfWeek[currentDate.getDay()];
    const month = monthsOfYear[currentDate.getMonth()];

    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedDate = `${dayName} ${month} ${date} `;
    const formattedTime = `${hours} : ${
      minutes < 10 ? "0" + minutes : minutes
    } ${ampm}`;

    setDate(formattedDate);
    setTime(formattedTime);
  };

  useEffect(() => {
    setInterval(calcDate, 1000);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "5px 10px",
        gap: 15,
        backgroundColor: "black",
        opacity: 0.1,
      }}
    >
      <Image
        src={batteryImg}
        alt="battery-icon"
        width={30}
        height={30}
        style={{ marginTop: -4 }}
      />
      <Image
        src={wifiImg}
        alt="wifi-icon"
        width={25}
        height={25}
        style={{ marginTop: -2 }}
      />
      <Image
        src={switchImg}
        alt="switch-icon"
        width={25}
        height={25}
        style={{ marginTop: -2 }}
      />
      <Image
        src={searchImg}
        alt="search-icon"
        width={25}
        height={25}
        style={{ marginTop: -2 }}
      />
      <h3 style={{ wordSpacing: 5 }}>{date}</h3>
      <h3>{time}</h3>
    </div>
  );
};

export default Navigation;
