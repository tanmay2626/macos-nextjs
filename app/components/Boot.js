import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";

const Boot = (props) => {
  const router = useRouter();
  // to track progress
  const [progress, setProgress] = useState(0);

  // increment progress bar
  useEffect(() => {
    const intervalID = setInterval(() => {
      // update for every 0.5s
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 10 : 100
      );
    }, 500);

    // once interval has stopped, clear it
    return () => clearInterval(intervalID);
  }, []);

  // to navigate when reaches 100
  useEffect(() => {
    if (progress == 100) {
      router.push("/lockscreen");
    }
  }, [progress]);

  return (
    <div className={styles.loader}>
      <div
        style={{
          width: `${progress}%`,
          height: "5px",
          backgroundColor: "white",
          textAlign: "center",
          lineHeight: "20px",
        }}
      ></div>
    </div>
  );
};

export default Boot;
