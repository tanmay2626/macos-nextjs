import Image from "next/image";
import React from "react";
import wifiImg from "../../public/wifi.png";
import batteryImg from "../../public/battery.png";

const Navigation = (props) => {
  const calcDate = () => {
    // Get current date and time
    const currentDate = new Date();

    // Array of day names
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    // Get day name
    const dayName = daysOfWeek[currentDate.getDay()];

    // Get hours and minutes
    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    // Convert to AM/PM format
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be displayed as 12

    // Format the time
    const formattedTime = `${dayName} ${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    } ${ampm}`;

    return formattedTime;
  };

  const currentDate = calcDate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "5px 10px",
        gap: 25,
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
      <h3>{currentDate}</h3>
    </div>
  );
};

export default Navigation;
