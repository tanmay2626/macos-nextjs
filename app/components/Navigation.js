import Image from "next/image";
import React, { useState, useEffect } from "react";
import wifiImg from "../../public/wifi.png";
import batteryImg from "../../public/battery.png";

const Navigation = (props) => {
  const [date, setDate] = useState(null);

  const calcDate = () => {
    const currentDate = new Date();

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    const dayName = daysOfWeek[currentDate.getDay()];

    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedTime = `${dayName} ${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    } ${ampm}`;

    setDate(formattedTime);
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
      }}
    >
      <Image
        src={batteryImg}
        alt="wifi-icon"
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
      <h3>{date}</h3>
    </div>
  );
};

export default Navigation;
