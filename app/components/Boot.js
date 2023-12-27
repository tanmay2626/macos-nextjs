import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";

const Boot = (props) => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 10 : 100
      );
    }, 500);

    return () => clearInterval(intervalID);
  }, []);

  useEffect(() => {
    if (progress == 100) {
      router.push("/lock");
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
